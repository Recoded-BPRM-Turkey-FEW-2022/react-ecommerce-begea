// this is a main container for main page
import { Link } from 'react-router-dom';
import image from '../../images/pngegg(3).png';
import chair from '../../images/chair.png';
import table from '../../images/tables.png';

export default function Main() {
  return (
    <div className=''>
      <div className='max-w-7xl m-auto border-x border-y border-black-100 overflow-hidden relative p-5'>
        <div className='flex justify-between items-center md:flex-col-reverse'>
          <div className='w-2/4 p-3 z-10 md:w-auto'>
            <h2 className='text-[4.25rem] font-light mb-24 leading-[1] md:text-[2.25rem] md:mb-10'>
              Cherish your home with our <strong>*new*</strong> products
            </h2>
            <Link to='/allproducts'>
              <button className='p-5 bg-black text-white hover:bg-gray-800 rounded-xl border-2 md:p-3'>
                Check new products
              </button>
            </Link>
          </div>
          <div className='w-2/4 bg-cover flex justify-end overflow-hidden md:w-auto'>
            <div>
              <img src={image} alt='' className='' />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl m-auto border-x border-y border-black-100 overflow-hidden relative'>
        <div className='flex justify-between items-center md:flex-col'>
          <div className='w-[40%] h-[550px] z-10 relative border-r-[1px] border-black-100 p-8 md:w-[100%] md:border-b-[1px]'>
            <Link to='/allproducts'>
              <h2 className='text-[3rem] font-light leading-[1] tracking-tighter pb-2'>
                Chairs
              </h2>
            </Link>
            <p className='text-gray-400'>12 brands, 54 products</p>
            <div className='absolute right-10 bottom-1'>
              <img src={chair} alt='' className='w-96' />
            </div>
          </div>
          <div className='w-[60%] h-[550px] z-10 relative p-8 md:w-[100%] md:border-b-[1px]'>
            <Link to='/allproducts'>
              <h2 className='text-[3rem] font-light leading-[1] tracking-tighter pb-2'>
                Tables
              </h2>
            </Link>
            <p className='text-gray-400'>8 brands, 23 products</p>
            <div className='absolute right-10 bottom-1'>
              <img src={table} alt='' className='w-[600px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
