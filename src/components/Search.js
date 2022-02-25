import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links';

export const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 450);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className='flex justify-center items-center flex-col mt-3 px-7'>
      <input
        type='text'
        value={text}
        className='mt-4 sm:mt-0 sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
        placeholder='Search on Quublyy...'
        onChange={(e) => setText(e.target.value)}
      />
      <Links />
    </div>
  );
};
