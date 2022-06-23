// this will be a navbar that contain, logo, search, categories, all products,
// login, signup and cart
import { GrCart } from 'react-icons/gr';
import { RiUser3Line } from 'react-icons/ri';
import { FiUserPlus } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className=' bg-navbar drop-shadow-[0_8px_24px_rgba(149,157,165,0.2)] mb-[5rem]'>
      <nav className='flex justify-between items-center h-[7.5vh] max-w-7xl m-auto'>
        <div className='logo text-2xl pl-5'>
          <h1 className='font-bold '>Shopmop</h1>
        </div>
        <div className='nav-links pr-5'>
          <ul className='flex items-center gap-10 text-lg'>
            <li className='hover:underline'>
              <a href='#' className='flex justify-center items-center gap-2'>
                {' '}
                <GrCart /> Cart
              </a>
            </li>
            <li className='hover:underline'>
              <a href='#'>All Products</a>
            </li>
            <li className='hover:underline'>
              <a href='#' className='flex justify-center items-center gap-2'>
                {' '}
                <RiUser3Line /> Login
              </a>
            </li>
            <li className='hover:underline'>
              <a href='#' className='flex justify-center items-center gap-2'>
                {' '}
                <FiUserPlus /> Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
