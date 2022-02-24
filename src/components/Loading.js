import React from 'react';
import { Rings } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Rings color='#B042FF' height={80} width={80} />
    </div>
  );
};
