const Company = () => {
  return (
    <div className='flex-col md:flex-row flex items-start justify-center  gap-6 md:gap-0 m-10'>
      <div className='flex flex-col items-start w-[100%]'>
        <p className='text-[50px] '>We integrate with</p>
        <button className='w-[140px] bg-green-300 p-2 cursor-pointer hover:border hover:border-green-300 hover:bg-transparent hover:border-2'>
          Add more!
        </button>
      </div>
      <div className='flex flex-wrap gap-10 w-[100%] '>
        <img src='/com-1.png' alt='' className='h-[30px] md:h-[50px]' />
        <img src='/com-2.png' alt='' className='h-[30px] md:h-[50px]' />
        <img src='/com-3.png' alt='' className='h-[30px] md:h-[50px]' />
        <img src='/com-4.png' alt='' className='h-[30px] md:h-[50px]' />
        <img src='/com-5.png' alt='' className='h-[30px] md:h-[50px]' />
        <img src='/com-6.png' alt='' className='h-[30px] md:h-[50px]' />
        <img src='/com-7.png' alt='' className='h-[30px] md:h-[50px]' />
        <img src='/com-8.png' alt='' className='h-[30px] md:h-[50px]' />
      </div>
    </div>
  );
};
export default Company;
