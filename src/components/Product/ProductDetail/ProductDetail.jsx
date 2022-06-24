import {
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { addProduct } from '../../../api/cartApi';

const queryClientMain = new QueryClient();

function ProductDetail({ clickedProduct }) {
  return (
    <QueryClientProvider client={queryClientMain}>
      <ProductDetailContainer clickedProduct={clickedProduct} />
    </QueryClientProvider>
  );
}

const ProductDetailContainer = ({ clickedProduct }) => {
  const queryClient = useQueryClient();

  const addProductMutation = useMutation(addProduct, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries('cart');
    },
  });

  const addToBaseket = () => {
    addProductMutation.mutate(clickedProduct);
  };

  return (
    <div className='flex-wrap flex-start flex m-auto w-3/4 min-h-[568px] mt-8 mb-8 shadow-sm justify-around bg-white border-solid border border-zinc-200 max-w-7xl'>
      <div className='w-6/12 self-center '>
        <img
          className='self-center md-flex border-solid border border-zinc-300 scale-75 hover:scale-100 ease-in duration-500'
          src={clickedProduct.image}
          alt='./images/image.png'
        />
      </div>
      <div className='flex flex-col flex-wrap self-center w-96'>
        <div className='flex flex-wrap flex-col  text-center'>
          <p className='text-zinc-700 font-bold text-3xl hover:underline hover:cursor-pointer mb-5'>
            {clickedProduct.title}
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p className='text-zinc-600 '>
            <strong>Description:</strong> {clickedProduct.description}
          </p>
          <br></br>
          <br></br>
          <br></br>
          {/*quantity */}
          <p className='text-zinc-600 text-sm mb-5 pt-5'>Only For</p>
          <span className='text-3xl font-bold dark:text-red-700'>
            ${clickedProduct.price}
          </span>
        </div>
        <br></br>
        {/* <div className='text-center'>
          <button
            className='text-white  hover:bg-red-800 focus:ring-4 hover:shadow-lg focus:outline-none focus:ring-red-300 font-medium text-2xl rounded-sm  px-5 py-2.5 w-60 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-12'
            onClick={addToBaseket}
          >
            Add to Cart
          </button>
        </div> */}
        <div className='mt-6 max-w-[250px] w-[250px] m-auto mb-5'>
          <a
            href='#'
            className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
            onClick={addToBaseket}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
