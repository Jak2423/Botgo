import Link from 'next/link';

export async function getStaticProps() {
  const data = (await import('../../lib/courses.json')).default;

  return {
    props: { courses: data },
  };
}

const Courses = ({ courses }) => {
  return (
    <div className='flex flex-col justify-center items-start max-w-2xl w-full mx-auto'>
      <h1 className='mb-8 text-2xl md:text-4xl font-bold tracking-tight text-black dark:text-white'>
        Бүх хичээл
      </h1>
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
    </div>
  );
};

export default Courses;
