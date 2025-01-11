import { Globe, MetaLogo, XLogo } from "@phosphor-icons/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t md:py-8 text-gray-300 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-10 pt-4">
            <img src="/img/votefave-tp.png" alt="Logo" className="h-8 w-fit" />
        </div>
        <div className='grid grid-cols-2 pt-2 pb-6 gap-x-4 w-full lg:gap-x-10 gap-y-10 md:justify-items-center md:grid-cols-4 lg:grid-cols-3'>
            <div className="hidden md:block" />
            <div className='flex flex-col text-sm md:text-base md:pl-8 gap-4'>
                <div className='text-white font-bold text-lg'>Pages</div>
                <a href='/home#categories' className='font-semibold text-gray-100 hover:text-gray-300'>Categories</a>
                <a href='/results' className='font-semibold text-gray-100 hover:text-gray-300'>Live Results</a>
                <a href='tel:+233506397746' className='font-semibold text-gray-100 hover:text-gray-300'>Support</a>
            </div>
            <div className='flex flex-col text-sm md:text-base md:pl-8 gap-4'>
                <div className='text-white font-bold text-lg'>Company</div>
                <a href='/terms' className='font-semibold text-gray-100 hover:text-gray-300'>Terms and Conditions</a>
                <a href='tel:+233506397746' className='font-semibold text-gray-100 hover:text-gray-300'>Sponsor</a>
                <a href='tel:+233506397746' className='font-semibold text-gray-100 hover:text-gray-300'>Help</a>
            </div>
            </div>
        <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Vote Fave Technology</span>. All rights reserved.
          </p>
          <p className="text-sm">
            Sponsored and powered by <a href="tel:+233506397746" target="_blank" rel="noopener noreferrer" className="text-[#84C53E] animate-pulse font-semibold hover:text-white">Vote Fave</a>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              className="hover:animate-pulse  "
              target="_blank"
              rel="noopener noreferrer"
            >
              <XLogo size={32} color="white" />
            </a>
            <a
              href="https://facebook.com"
              className="hover:animate-pulse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MetaLogo size={32} color="white" />
            </a>
            <a
              href="https://github.com"
              className="hover:animate-pulse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={32} color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
