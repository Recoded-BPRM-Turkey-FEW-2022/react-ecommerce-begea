import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../../../api/ProductsContext';
import CardView from '../../Product/CardView/CardView';

export default function ListProducts({ setClickedProduct }) {
  const products = useContext(ProductsContext);

  return (
    <div className='flex flex-wrap gap-8 w-3/4 mt-8 max-w-7xl m-auto justify-around'>
      {products.map((product, index) => {
        return (
          <CardView
            key={index}
            title={product.title}
            categories={product.category.name}
            price={product.price}
            image={
              product.images[0]
                ? product.images[0]
                : (src = 'images/no-image.png')
            }
            setClickedProduct={setClickedProduct}
            description={product.description}
          />
        );
      })}
    </div>
  );
}
