const MiniLayout = ({ children }: any) => {
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
