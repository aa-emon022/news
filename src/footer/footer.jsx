import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center">
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
