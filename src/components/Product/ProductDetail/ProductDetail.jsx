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
    <div className="flex-wrap flex-start flex m-auto w-3/4 h-screen  mt-8 mb-8 shadow-sm justify-around bg-white border-solid border border-zinc-200">
      <div className="w-6/12 self-center ">
        <img
          className="self-center md-flex border-solid border border-zinc-300 scale-75 hover:scale-100 ease-in duration-500"
          src={clickedProduct.image}
          alt="./images/image.png"
        />
      </div>
      <div className="flex flex-col flex-wrap self-center w-96">
        <div className="flex flex-wrap flex-col  text-center">
          <p className="text-zinc-700 font-bold text-3xl hover:underline hover:cursor-pointer">
            {clickedProduct.title}
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p className="text-zinc-600 "><strong>Description:</strong> {clickedProduct.description}</p>
          <br></br>
          <br></br>
          <br></br>
          {/*quantity */}
          <p className="text-zinc-600 text-sm">Only For</p>
          <span className="text-5xl font-bold dark:text-red-700">
            ${clickedProduct.price}
          </span>
        </div>
        <br></br>
        <div className="text-center">
          <button className="text-white  hover:bg-red-800 focus:ring-4 hover:shadow-lg focus:outline-none focus:ring-red-300 font-medium text-2xl rounded-sm  px-5 py-2.5 w-60 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-12"
          onClick={addToBaseket} >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
