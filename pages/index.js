import { SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

export default function Home({ courses }) {
	const [search, setSearch] = useState('');
	const filteredCourses = courses
		.filter((course) =>
			course.name.toLowerCase().includes(search.toLowerCase()),
		)
		.slice(0, 9);

	return (
		<div className='max-w-2xl mt-0 mx-auto w-full'>
			<div className='flex flex-col items-center'>
				<div className='mb-8 pt-8 md:pt-0'>
					<h1 className='md:text-6xl text-5xl font-bold tracking-wider leading-loose text-blue-500 '>
						Botgo
					</h1>
				</div>
				<div className='relative max-w-xs md:max-w-lg w-full'>
					<input
						className={cn(
							search
								? 'rounded-t-md focus:border-b-0 hover:border-b-0'
								: 'rounded-md',
							'w-full py-2 pl-4 pr-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 hover:border-gray-400 dark:hover:border-gray-500 outline-none',
						)}
						type='text'
						placeholder='Хичээлийн нэрээр хайх...'
						onChange={(e) => setSearch(e.target.value)}
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
					{search && filteredCourses.length ? (
						filteredCourses.map((course) => (
							<div
								className='cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 py-2 px-4'
								key={course.id}
							>
								<Link href={`courses/${course.id}`}>
									<p className='flex items-center'>{course.name}</p>
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

export async function getStaticProps() {
	const data = (await import('../lib/courses.json')).default;

	const courses = data.map((course) => ({
		id: course.id,
		name: course.mn_name,
	}));

	return {
		props: { courses },
	};
}
