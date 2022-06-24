import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { useState } from 'react';
import { getCart, deleteProduct } from '../../../api/cartApi';

const queryClientMain = new QueryClient();

export default function CartComponent() {
  return (
    <QueryClientProvider client={queryClientMain}>
      <Cart />
    </QueryClientProvider>
  );
}

function Cart() {
  const queryClient = useQueryClient();

  let lodash = require('lodash');

  const { isLoading, isError, error, data: cart } = useQuery('cart', getCart);

  const deleteProductMutation = useMutation(deleteProduct, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries('cart');
    },
  });

  let content;
  let total;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    total = cart.map((item) => item.price);
    content = cart.map((item) => {
      return (
        <div key={item.id}>
          <div className='flex py-6'>
            <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
              <img
                src={item.image}
                alt='image'
                className='h-full w-full object-cover object-center'
              />
            </div>

            <div className='ml-4 flex flex-1 flex-col'>
              <div>
                <div className='flex justify-between text-base font-medium text-gray-900'>
                  <h3>
                    <a href='#'> {item.title} </a>
                  </h3>
                  <p className='ml-4'>${item.price}</p>
                </div>
                <p className='mt-1 text-sm text-gray-500'>Salmon</p>
              </div>
              <div className='flex flex-1 items-end justify-between text-sm'>
                <p className='text-gray-500'>Qty 1</p>

                <div className='flex'>
                  <button
                    type='button'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                    onClick={() =>
                      deleteProductMutation.mutate({ id: item.id })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      );
    });
  }

  return (
    <div className=' p-8 w-9/12 h-auto border-r-5 m-auto max-w-7xl w-auto'>
      <div className='mb-5'>
        {content.length > 0 ? (
          content
        ) : (
          <p className='text-center font-bold mb-5 text-red-700'>
            No item in the basket!
          </p>
        )}
      </div>
      <div className='flex justify-between text-base font-medium text-gray-900'>
        <p className='font-bold'>Subtotal</p>
        <p className='font-bold text-[2rem]'>${lodash.sum(total)}</p>
      </div>
      <p className='mt-0.5 text-sm text-gray-500'>
        Shipping and taxes calculated at checkout.
      </p>
      <div className='mt-6'>
        <a
          href='#'
          className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
        >
          Checkout
        </a>
      </div>
    </div>
  );
}
