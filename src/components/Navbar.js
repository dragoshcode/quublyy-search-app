import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <img
            src={logo}
            alt='logo'
            className='bg-blue-600 rounded w-40 px-2 dark:bg-gray-700'
          />
        </Link>
        <button
          type='button'
          onClick={() => setDarkTheme(!darkTheme)}
          className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'
        >
          {darkTheme ? 'Light 💡' : 'Dark 🌕'}
        </button>
      </div>
      <Search />
    </div>
  );
};
