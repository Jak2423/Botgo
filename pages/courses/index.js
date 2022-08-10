import Link from 'next/link';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export async function getStaticProps() {
  const data = (await import('../../lib/courses.json')).default.slice(0, 10);

  return {
    props: { data },
  };
}

const Courses = ({ data }) => {
  const [courses, setCourses] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMoreCourses = async () => {
    const newCourses = (await import('../../lib/courses.json')).default.slice(
      courses.length,
      courses.length + 10,
    );
    setCourses((course) => [...course, ...newCourses]);
  };

  return (
    <div className='flex flex-col justify-center items-start max-w-2xl w-full mx-auto'>
      <h1 className='mb-8 text-2xl md:text-4xl font-bold tracking-tight text-black dark:text-white'>
        Бүх хичээл
      </h1>
      <InfiniteScroll
        dataLength={courses.length}
        next={getMoreCourses}
        hasMore={hasMore}
        loader={
          <p className='text-center text-md text-grey-700 dark:text-gray-300'>
            Loading...
          </p>
        }
        endMessage={
          <p className='text-center text-md text-grey-700 dark:text-gray-300'>
            Nothing more to show
          </p>
        }
      >
        {courses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id}>
            <a className='w-full'>
              <div className='w-full mb-8'>
                <div className='flex flex-col justify-between md:flex-row'>
                  <h2 className='w-full mb-2 text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100'>
                    {course.mn_name}
                  </h2>
                  <p className='w-32 text-left md:text-right mb-2 md:mb-0 text-gray-500'>
                    {course.course_index}
                  </p>
                </div>
                <div className='hidden md:flex flex-col md:flex-row items-start justify-between md:items-center w-full'>
                  <p className='text-md text-grey-700 dark:text-gray-300'>
                    {course.course_index} / {course.degree_level}
                  </p>
                  <p className='text-md text-grey-700 dark:text-gray-300 mt-2 md:mt-0'>
                    Багц цаг: {course.credit}
                  </p>
                </div>
                <hr className='border-gray-200 dark:border-gray-800 md:my-4' />
              </div>
            </a>
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Courses;
