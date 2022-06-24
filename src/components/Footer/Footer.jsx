import { CategoriesContext } from '../../api/CategoriesContext';
import ProductCategories from '../../api/ProductCategories';

import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

import { Link } from 'react-router-dom';
export default function Footer() {
  const categories = ProductCategories();

  return (
    <CategoriesContext.Provider value={categories}>
      <div className='bg-black text-white'>
        <div className='footer m-auto max-w-7xl flex justify-between pt-10 pb-10 flex-wrap gap-10 lg:pl-5 lg:pr-5 lg:justify-around'>
          <div className=''>
            <div className='logo text-2xl'>
              <h1 className='md:font-bold mb-3'>
                <Link to='/'>Shopmop</Link>
              </h1>
              <div className='flex flex-row items-center'>
                <a href='#'>
                  <AiOutlineInstagram size={35} />
                </a>
                <a href='#'>
                  <AiOutlineFacebook size={35} />
                </a>
                <a href='#'>
                  <AiOutlineTwitter size={35} />
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-col font-extralight'>
            <a href='#' className='font-bold mb-3'>
              About Us
            </a>
            <p>Address: 123 St.</p>
            <p>Phone: +1-888-1234</p>
            <a href='#' className=''>
              E-Mail Us!
            </a>
          </div>
          <div className='flex flex-col font-extralight'>
            <p className='font-bold mb-3 md:mb-5'>Categories</p>
            <ul>
              {categories.map((category) => {
                return (
                  <a href='#' key={category.id}>
                    <li className=' flex flex-col hover:underline'>
                      {category.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className='flex flex-col font-extralight'>
            <p className='font-bold mb-3'>Let Us Help You!</p>
            <ul className='font-extralight'>
              <li className=' flex flex-col justify-around hover:underline'>
                {' '}
                <a href='#'>Track Your Order</a>
              </li>
              <li className=' flex flex-col justify-around hover:underline'>
                {' '}
                <a href='#'>Delivery Fee and Policies</a>
              </li>
              <li className=' flex flex-col justify-around hover:underline'>
                {' '}
                <a href='#'>Return Policy</a>
              </li>
              <li className=' flex flex-col justify-around hover:underline'>
                {' '}
                <a href='#'>Customer Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CategoriesContext.Provider>
  );
}
