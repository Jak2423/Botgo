import Link from 'next/link';
import { getFilteredCourses } from '../lib/actions';
import { Course } from '../lib/definitions';

export default async function ScrollableCourses({
	query,
	sort,
	currentPage,
}: {
	query: string;
	sort: string;
	currentPage: number;
}) {
	const courses = await getFilteredCourses(query, currentPage, sort);

	return (
		<div className='w-full md:min-w-[42rem]'>
			{courses.length ? (
				courses.map((course: Course) => (
					<Link href={`/courses/${course.id}`} key={course.id}>
						<div className='w-full mb-8'>
							<div className='flex flex-col justify-between md:flex-row'>
								<h2 className='mb-2 text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 hover:translate-x-1 transition-all ease-linear'>
									{course.mn_name}
								</h2>
								<p className='w-32 text-left md:text-right mb-2 md:mb-0 text-gray-500'>
									{course.course_index}
								</p>
							</div>
							<div className='hidden md:flex flex-col md:flex-row items-start justify-between md:items-center w-full'>
								<p className='text-md text-grey-700 dark:text-gray-300 '>
									{course.course_index} / {course.degree_level}
								</p>
								<p className='text-md text-grey-700 dark:text-gray-300 mt-2 md:mt-0'>
									Багц цаг: {course.credit}
								</p>
							</div>
							<hr className='border-gray-200 dark:border-gray-800 md:my-4' />
						</div>
					</Link>
				))
			) : (
				<p className='px-4 py-2 text-gray-600 dark:text-gray-400'>Хайлт олдсонгүй :&#40;</p>
			)}
		</div>
	);
}
