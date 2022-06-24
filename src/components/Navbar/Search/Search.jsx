// search
import CardView from '../../Product/CardView/CardView';
export default function ({ foundProduct, setClickedProduct }) {
  return (
    <>
      <div className='flex flex-wrap gap-8 w-3/4 mt-8 max-w-7xl m-auto justify-around'>
        {foundProduct.length ? (
          foundProduct.map((product, index) => {
            return (
              <CardView
                key={index}
                title={product.title}
                description={product.description}
                categories={product.category.name}
                price={product.price}
                image={product.category.image}
                setClickedProduct={setClickedProduct}
              />
            );
          })
        ) : (
          <h1>Sorry, we could not find your product.</h1>
        )}
      </div>
    </>
  );
}
