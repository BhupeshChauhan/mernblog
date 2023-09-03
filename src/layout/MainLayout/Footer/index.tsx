import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-center shadow-sm w-full h-8 bg-slate-200'>
        <div className='footer-content'>{/* <!-- Footer content goes here --> */}</div>
        <div className='text-center text-slate-700 dark:bg-secondary-700 dark:text-secondary-200 flex justify-center items-center'>
          © 2023 Copyright:
          <a
            className='text-slate-800 dark:text-secondary-400'
            href='https://tailwind-elements.com/'
          >
            Tailwind Elements
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
