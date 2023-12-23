import { getCourseById } from '@/app/lib/actions';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const course = await getCourseById(id);

	if (!course) {
		notFound();
	}

	return (
		<article className='max-w-2xl w-full mx-auto flex flex-col items-start justify-center'>
			<h1 className='mb-4 text-2xl font-bold tracking-tight md:text-4xl'>{course.mn_name}</h1>
			<section className='flex flex-col md:flex-row items-start justify-between md:items-center w-full'>
				<p className='text-md text-grey-700 dark:text-gray-300'>
					{course.course_index} / {course.degree_level}
				</p>
				<p className='text-md text-grey-700 dark:text-gray-300 mt-2 md:mt-0'>
					Багц цаг: {course.credit}
				</p>
			</section>
			<section className='flex flex-col md:flex-row items-start justify-between md:items-center w-full'>
				<p className='text-md text-grey-700 dark:text-gray-300'>{course.department}</p>
				<p className='text-md text-grey-700 dark:text-gray-300 mt-2 md:mt-0'>
					{course.semester}
				</p>
			</section>
			<section className='w-full mt-8'>
				<div className='mb-8 text-gray-800 dark:text-gray-300 border-l-4 border-gray-200 dark:border-gray-700 pl-4'>
					<p>Лекц: {course.lecture_credit}</p>
					<p>Семинар: {course.seminar_credit}</p>
					<p>Лаборатори: {course.lab_credit}</p>
					<p>Бие даалт: {course.assignment_credit}</p>
				</div>
				<h2 className='font-bold text-2xl mb-4'>Зорилго</h2>
				<p className='mb-8 tracking-wider text-gray-800 dark:text-gray-300 leading-relaxed'>
					{course.purpose}
				</p>
				<h2 className='font-bold text-2xl mb-4'>Товч агуулга</h2>
				<p className=' tracking-wider text-gray-800 dark:text-gray-300 leading-relaxed'>
					{course.summary}
				</p>
				<hr className='border-gray-200 dark:border-gray-800 my-12' />
			</section>
		</article>
	);
}
