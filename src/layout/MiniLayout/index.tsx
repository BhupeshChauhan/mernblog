import React from 'react';

const MiniLayout = ({ children }) => {
  return (
    <>
      <main className='flex min-h-screen'>
        <div className='w-full'>
          <div className='p-5'>{children}</div>
        </div>
      </main>
    </>
  );
};

export default MiniLayout;
