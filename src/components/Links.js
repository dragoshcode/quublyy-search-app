import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🌐 All' },
  { url: '/news', text: '📜 News' },
  { url: '/images', text: '🖼 Images' },
  { url: '/videos', text: '🎥 Videos' },
];

export const Links = () => {
  return (
    <div className='flex justify-center w-screen items-center mt-4'>
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className={({ isActive }) =>
            isActive
              ? 'mx-3 lg:mx-12 mb-2 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'
              : 'mx-3 lg:mx-12 mb-2'
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
