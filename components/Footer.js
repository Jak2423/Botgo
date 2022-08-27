import React from 'react';

export default function Footer() {
  return (
    <div className='max-w-2xl w-full mx-auto flex items-center justify-center'>
      <div className='mt-10 mb-5'>
        <p className='text-center text-xs md:text-sm'>
          Designed & Developed by Jak.
          <br />
          Built with{' '}
          <span className='font-semibold text-blue-600 dark:text-blue-400'>
            Next.js
          </span>{' '}
          &{' '}
          <span className='font-semibold text-blue-600  dark:text-blue-400'>
            Tailwind CSS
          </span>
          . Hosted on{' '}
          <span className='font-semibold text-blue-600  dark:text-blue-400'>
            Vercel
          </span>
          .
        </p>
      </div>
    </div>
  );
}
