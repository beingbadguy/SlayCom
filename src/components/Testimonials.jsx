import Testimonial from './Testimonial';
import { IoMailUnreadSharp } from 'react-icons/io5';
const Testimonials = () => {
  return (
    <div className='flex flex-col items-center gap-2 '>
      <div className='bg-green-300 p-2 rounded-xl flex items-center gap-2'>
        <IoMailUnreadSharp />
        <p className='font-bold'>Testimonials</p>
      </div>
      <h1>Public Cheers for Us!</h1>
      <p>Find out how our users spreadin the word!</p>
      <div className='flex flex-wrap items-center justify-center  gap-6 bg-green-300 p-10'>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};
export default Testimonials;
