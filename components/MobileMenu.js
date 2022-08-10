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
          <MenuIcon className='w-5 h-5 text-gray-900 dark:text-gray-100 ' />
        ) : (
          <XIcon className='w-5 h-5  text-gray-900 dark:text-gray-100 ' />
        )}
      </button>

      <div
        className={cn(
          isMenuOpen ? 'opacity-100' : 'opacity-0',
          'absolute min-w-max transition-all duration-75 ease-in',
        )}
      >
        <div className='flex flex-col items-start justify-center min-w-[10rem] w-full bg-gray-200 dark:bg-gray-800 py-2 rounded-md dark:shadow-lg shadow-md'>
          <Link href='/'>
            <a className='py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all'>
              Нүүр
            </a>
          </Link>
          <Link href='/courses'>
            <a className='py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all'>
              Хичээл
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
