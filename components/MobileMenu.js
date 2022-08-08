import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useRouter();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        className='visible md:hidden ml-2'
        aria-label='Toggle menu'
        type='button'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {!isMenuOpen ? (
          <MenuIcon className='w-5 h-5 text-gray-900 dark:text-gray-100 transition duration-300' />
        ) : (
          <XIcon className='w-5 h-5  text-gray-900 dark:text-gray-100 transition duration-300' />
        )}
      </button>

      <div
        className={cn(
          isMenuOpen ? 'visible' : 'hidden',
          'absolute min-w-max origin-top-left top-0 bottom-auto left-0 right-auto translate-y-16 m-0',
        )}
      >
        <div
          className={cn(
            isMenuOpen
              ? 'opacity-100 visible transform-none'
              : 'opacity-0 hidden scale-90',
            'origin-top-left flex flex-col items-start justify-center min-w-[10rem] w-full bg-gray-200 dark:bg-gray-800 py-2 rounded-md dark:shadow-lg shadow-md transition-all duration-500 ease-in z-[1]',
          )}
        >
          <Link href='/'>
            <a className='py-2 px-4'>Нүүр</a>
          </Link>
          <Link href='/courses'>
            <a className='py-2 px-4'>Хичээл</a>
          </Link>
        </div>
      </div>
    </>
  );
}
