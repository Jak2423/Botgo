export const getStaticPaths = async () => {
	const data = (await import('../../lib/courses.json')).default;

	const paths = data.map((course) => ({
		params: { id: course.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const data = (await import('../../lib/courses.json')).default;
	const course = data.find((c) => c.id.toString() === context.params.id);
	return {
		props: { course: course },
	};
};

const Details = ({ course }) => {
	return (
		<article className='max-w-2xl w-full mx-auto flex flex-col items-start justify-center'>
			<h1 className='mb-4 text-2xl font-bold tracking-tight md:text-4xl'>
				{course.mn_name}
			</h1>
			<div className='flex flex-col md:flex-row items-start justify-between md:items-center w-full'>
				<p className='text-md text-grey-700 dark:text-gray-300'>
					{course.course_index} / {course.degree_level}
				</p>
				<p className='text-md text-grey-700 dark:text-gray-300 mt-2 md:mt-0'>
					Багц цаг: {course.credit}
				</p>
			</div>
			<div className='flex flex-col md:flex-row items-start justify-between md:items-center w-full'>
				<p className='text-md text-grey-700 dark:text-gray-300'>
					{course.department}
				</p>
				<p className='text-md text-grey-700 dark:text-gray-300 mt-2 md:mt-0'>
					{course.semester}
				</p>
			</div>
			<div className='w-full mt-8'>
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
			</div>
		</article>
	);
};

export default Details;
