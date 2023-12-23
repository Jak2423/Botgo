'use client';

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className='flex flex-col justify-center items-start max-w-2xl w-full mx-auto'>
			<p className='text-gray-600 dark:text-gray-400 mb-20 text-xl md:text-2xl'>
				Oh no, something went wrong... maybe refresh?
			</p>
		</div>
	);
}
