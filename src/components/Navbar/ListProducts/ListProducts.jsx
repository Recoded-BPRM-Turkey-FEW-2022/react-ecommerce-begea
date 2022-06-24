import { useContext } from 'react';
import { ProductsContext } from '../../../api/ProductsContext';
import CardView from '../../Product/CardView/CardView';

export default function ListProducts() {
  const products = useContext(ProductsContext);
  // console.log(products);
  return (
    <>
      {products.map((product, index) => {
        return (
          <CardView
            key={index}
            title={product.title}
            // categories={product.category.name}
            price={product.price}
            // image={product.images[0]}
          />
        );
      })}
    </>
  );
}
