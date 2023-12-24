export function CourseSkeleton() {
	return (
		<div className='w-full  mb-8'>
			<div className='flex flex-col justify-between md:flex-row'>
				<div className='mb-2 w-1/2 h-7 rounded-xl bg-gray-300 dark:bg-gray-800' />
				<div className='w-20 h-5 rounded-xl mb-2 md:mb-0 bg-gray-300 dark:bg-gray-800' />
			</div>
			<div className='hidden md:flex flex-col md:flex-row items-start justify-between md:items-center w-full'>
				<div className='w-36 h-5 bg-gray-200 dark:bg-gray-700 rounded-xl' />
				<div className='w-24 h-5 bg-gray-200 rounded-xl dark:bg-gray-700 mt-2 md:mt-0' />
			</div>
			<hr className='border-gray-200 dark:border-gray-800 md:my-4' />
		</div>
	);
}

export function CoursesSkeleton() {
	return (
		<div className='w-full md:min-w-[42rem]'>
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
			<CourseSkeleton />
		</div>
	);
}
