import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import MobileMenu from './MobileMenu';

function NavItem({ href, text }) {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<Link href={href}>
			<a
				className={cn(
					isActive
						? 'font-semibold text-gray-800 dark:text-gray-200'
						: 'font-normal text-gray-600 dark:text-gray-400',
					'hidden md:inline-block p-1 px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all  rounded-md',
				)}
			>
				{text}
			</a>
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
			<nav className='max-w-2xl w-full mx-auto flex items-center justify-between  relative pt-8 pb-8 md:pb-16'>
				<div className='ml-[-0.60rem]'>
					<MobileMenu />
					<NavItem href='/' text='Нүүр' />
					<NavItem href='/courses' text='Хичээл' />
				</div>
				<button
					aria-label='Toggle Dark Mode'
					className='w-9 h-9 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-200 dark:ring-gray-400 transition-all ease-in duration-100'
					onClick={() =>
						setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
					}
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
