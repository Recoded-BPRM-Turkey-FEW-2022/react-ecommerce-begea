import { Link } from 'react-router-dom';

function CardView({
  categories,
  title,
  price,
  image,
  setClickedProduct,
  description,
}) {
  let path = `/product/${title.split(' ').join('-')}`;

  const handleOnClick = () => {
    setClickedProduct({
      categories: categories,
      title: title,
      price: price,
      image: image,
      description: description,
    });
  };

  return (
    <Link to={path}>
      <div
        className='bg-transparent font-Roboto grid rounded-sm p-4 overflow-hidden border-x border-y w-64 transition-all duration-300 hover:bg-white hover:cursor-pointer hover:shadow-md'
        onClick={handleOnClick}
      >
        <div className='max-w-sm flex justify-center mb-4'>
          <img
            src={image}
            alt='product image'
            className='w-auto h-32 sm:h-48 object-cover'
          />
        </div>
        <div className=' mb-3 flex flex-col items-center '>
          <p className=' mb-2 block font-medium leading-5'>{title}</p>
          <p className=' text-sm mb-1 font-extralight'>{categories}</p>
          <p className=' text-md font-normal'>$ {price}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardView;
