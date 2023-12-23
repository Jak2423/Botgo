import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex flex-col justify-center items-start max-w-2xl w-full mx-auto'>
			<h1 className='font-bold text-5xl md:text-7xl tracking-tight mb-4 text-black dark:text-white'>
				404
			</h1>
			<p className='text-gray-600 dark:text-gray-400 mb-20 text-xl md:text-2xl'>
				This page could not be found.
			</p>
			<Link
				href='/'
				className='p-2 sm:p-4 w-56 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white'
			>
				Return Home
			</Link>
		</div>
	);
}
