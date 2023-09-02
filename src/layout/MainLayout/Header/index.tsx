import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICE', link: '/services' },
    { name: 'ABOUT', link: '/about' },
    { name: "BLOG'S", link: '/blogs' },
    { name: 'CONTACT', link: '/contact' },
  ];
  return (
    <header>
      <div className='shadow-sm w-full h-12'>
        <div className='flex items-center justify-between bg-white py-2'>
          <div className='font-bold text-base pl-5 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
            Designer
          </div>
          <ul className={`flex items-center justify-end bg-white text-left w-full pr-9`}>
            {Links.map((link) => (
              <li key={link.name} className='ml-8 text-xl my-0'>
                <Link
                  to={link.link}
                  className='text-sm text-gray-600 hover:text-gray-400 hover:underline underline-offset-4 duration-500'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
