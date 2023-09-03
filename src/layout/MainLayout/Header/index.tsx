import Navbar from '../../../components/Navigation/Navbar';
import React from 'react';

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
      <Navbar Links={Links} />
    </header>
  );
};

export default Header;
