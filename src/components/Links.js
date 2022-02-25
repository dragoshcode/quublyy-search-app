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
    //   just continue from 9:12:20 and also read the opened .txt file, and also push -m "Add links for switching between the needed type of content"[speaking about those 4 links under "search input"] AND check Contexts' file
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
