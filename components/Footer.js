import React from 'react';

export default function Footer() {
	return (
		<div className='max-w-2xl w-full mx-auto h-[88px] flex items-center justify-center pt-8'>
			<div className=''>
				<p className='text-center text-xs md:text-sm font-light'>
					Designed & Developed by Jak.
					<br />
					Built with{' '}
					<span className='font-semibold text-blue-500'>
						Next.js
					</span> &{' '}
					<span className='font-semibold text-blue-500'>Tailwind CSS</span>
					. Hosted on{' '}
					<span className='font-semibold text-blue-500'>Vercel</span>.
				</p>
			</div>
		</div>
	);
}
