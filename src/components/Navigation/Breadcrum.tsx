import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrum = () => {
  return (
    <div>
      <nav className='h-8 flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] text-neutral-500 shadow-sm hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600'>
        <div className='flex w-full flex-wrap items-center justify-between px-3'>
          <nav className='w-full rounded-md' aria-label='breadcrumb'>
            <ol className='list-reset ml-2 flex'>
              <li>
                <Link
                  to='#'
                  className='text-sm text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200'
                >
                  Home
                </Link>
              </li>
              <li>
                <span className='text-sm mx-2 text-neutral-500 dark:text-neutral-200'>/</span>
              </li>
              <li>
                <Link
                  to='#'
                  className='text-sm text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200'
                >
                  Library
                </Link>
              </li>
              <li>
                <span className='text-sm mx-2 text-neutral-500 dark:text-neutral-200'>/</span>
              </li>
              <li>
                <Link
                  to='#'
                  className='text-sm text-neutral-500 transition duration-200 hover:text-neutral-600 hover:ease-in-out motion-reduce:transition-none dark:text-neutral-200'
                >
                  Data
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrum;
