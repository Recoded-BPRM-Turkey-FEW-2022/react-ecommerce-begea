import { useLayoutEffect, useState } from 'react';

export default function useProduct() {
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log('data fetched');
  }, []);

  return products;
}
