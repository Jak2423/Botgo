import React from 'react';

export default function Footer() {
	return (
		<div className='max-w-2xl w-full mx-auto flex items-center justify-center absolute bottom-0 left-0 right-0 h-[32px] mb-4'>
			<p className='text-center text-xs md:text-sm'>
				Designed & Developed by Jak.
				<br />
				Built with{' '}
				<span className='font-semibold text-blue-500'>Next.js</span> &{' '}
				<span className='font-semibold text-blue-500'>Tailwind CSS</span>.
				Hosted on{' '}
				<span className='font-semibold text-blue-500'>Vercel</span>.
			</p>
		</div>
	);
}
