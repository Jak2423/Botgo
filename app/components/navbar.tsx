'use client';
import { AcademicCapIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function NavItem({ href, child }: { href: string; child: any }) {
	return (
		<Link
			href={href}
			className='font-semibold text-gray-800 dark:text-gray-200 inline-block hover:opacity-80 transition-all  rounded-md'
		>
			{child}
		</Link>
	);
}

export default function Navbar() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className='flex flex-col justify-center px-8'>
			<nav className='relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto md:pb-16'>
				<div>
					<NavItem
						href={'/'}
						child={<AcademicCapIcon className='w-10 h-10 text-gray-800 dark:text-gray-200' />}
					/>
				</div>
				<button
					aria-label='Toggle Dark Mode'
					className='flex items-center justify-center transition-all duration-100 ease-in bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-800 hover:ring-2 ring-gray-200 dark:ring-gray-400'
					onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
				>
					{mounted && (
						<div>
							{resolvedTheme === 'dark' ? (
								<SunIcon className='w-5 h-5 text-white' />
							) : (
								<MoonIcon className='w-5 h-5 text-black' />
							)}
						</div>
					)}
				</button>
			</nav>
		</div>
	);
}
