import { SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

export async function getStaticProps() {
  const data = (await import('../lib/courses.json')).default;

  return {
    props: { courses: data },
  };
}

export default function Home({ courses }) {
  const [search, setSearch] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  const filterCourse = (value) => {
    setSearch(value);
    const result = courses
      .filter((course) =>
        course.mn_name.toLowerCase().includes(search.toLowerCase()),
      )
      .slice(0, 9);

    setFilteredCourses(result);
  };

  return (
    <div className='max-w-2xl mt-0 mx-auto w-full'>
      <div className='flex flex-col items-center'>
        <div className='mb-8 pt-8 md:pt-0'>
          <h1 className='md:text-6xl text-5xl font-bold tracking-wider leading-loose text-blue-600 dark:text-blue-400'>
            Botgo
          </h1>
        </div>
        <div className='relative max-w-xs md:max-w-lg w-full'>
          <input
            className={cn(
              search ? 'rounded-t-md border-b hover:border-b-0' : 'rounded-md',
              'w-full py-2 pl-4 pr-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 hover:border-gray-400 dark:hover:border-gray-500 outline-none',
            )}
            type='text'
            placeholder='Хичээлийн нэрээр хайх...'
            onChange={(e) => filterCourse(e.target.value)}
          />
          <div className='absolute top-0 right-0 flex items-center justify-center h-full px-2'>
            <SearchIcon className='h-5 w-5 text-gray-400' />
          </div>
        </div>
        <div
          className={cn(
            search ? 'visible' : 'hidden',
            'relative inline-block max-w-xs md:max-w-lg w-full bg-white dark:bg-gray-700 rounded-b-md drop-shadow-lg overflow-hidden transition-all duration-75 ease-in py-2',
          )}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                className='cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 py-2 px-4'
                key={course.id}
              >
                <Link href={`courses/${course.id}`}>
                  <p className='flex items-center'>{course.mn_name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p className='py-2 px-4 text-gray-600 dark:text-gray-400'>
              Хайлт олдсонгүй :&#40;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
