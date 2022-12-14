import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';

export default function MobileMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = useRouter();

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<>
			<button
				className='visible md:hidden ml-2'
				aria-label='Toggle menu'
				type='button'
				onClick={toggleMenu}
			>
				{!isMenuOpen ? (
					<MenuIcon className='w-5 h-5 text-gray-900 dark:text-gray-100 ' />
				) : (
					<XIcon className='w-5 h-5  text-gray-900 dark:text-gray-100 ' />
				)}
			</button>

			<div className={cn(isMenuOpen ? 'visible' : 'hidden', 'absolute min-w-max md:hidden')}>
				<div
					className={cn(
						isMenuOpen ? 'opacity-100 visible' : 'opacity-0 hidden',
						'flex flex-col items-start justify-center min-w-[10rem] w-full bg-gray-200 dark:bg-gray-800 py-2 rounded-md dark:shadow-lg shadow-md transition-colors ease-in duration-75',
					)}
				>
					<Link
						href='/'
						className='w-full py-2 px-4 transition-colors ease-in duration-75 hover:dark:bg-gray-700 hover:bg-gray-100'
						onClick={toggleMenu}
					>
						Нүүр
					</Link>
					<Link
						href='/courses'
						className='w-full py-2 px-4 transition-colors ease-in duration-75 hover:dark:bg-gray-700 hover:bg-gray-100'
						onClick={toggleMenu}
					>
						Хичээл
					</Link>
				</div>
			</div>
		</>
	);
}
