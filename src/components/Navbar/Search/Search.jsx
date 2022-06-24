// search
import CardView from '../../Product/CardView/CardView';
export default function ({ foundProduct }) {
  return (
    <>
      <div className='flex flex-wrap gap-8 w-3/4 mt-8 max-w-7xl m-auto justify-around'>
        {foundProduct.length ? (
          foundProduct.map((product, index) => {
            return (
              <CardView
                key={index}
                title={product.title}
                categories={product.category.name}
                price={product.price}
                image={product.images[0]}
              />
            );
          })
        ) : (
          <h1>Aradiginiz urun bulunamadi</h1>
        )}
      </div>
    </>
  );
}
