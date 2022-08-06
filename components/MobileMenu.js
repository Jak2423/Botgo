import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
      {isMenuOpen && (
        <div className='flex flex-col items-start absolute min-w-[10rem] dark:bg-gray-800 bg-white rounded-md border border-gray-200 dark:border-gray-800 origin-top-left transition duration-300 ease-in'>
          <div className='my-2 px-4 w-full transition-colors duration-75 ease-in'>
            <Link href='/'>
              <a>Нүүр</a>
            </Link>
          </div>
          <div className='my-2 px-4 w-full transition-colors duration-75 ease-in'>
            <Link href='/courses'>
              <a>Хичээл</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
