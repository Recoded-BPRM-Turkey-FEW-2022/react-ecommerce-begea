const ProductDetail = (title, price, image, description) => {

  return (
    <div className="flex flex-wrap flex-row align-middle m-auto w-3/4 h-4/5 mt-8 mb-8 shadow-md justify-around ">

        <a href="#">
          <img className="h-full  md-flex"  src={image} alt="./images/image.png" />
        </a>


      <div className="flex flex-col flex-wrap  mt-8 p-10 ">

          <div className="flex flex-wrap flex-col  text-center">

            <p className="text-black font-bold text-3xl hover:underline">
            {title}
            </p>
            <br></br>
            <p className="text-zinc-600 ">{description}</p>
            <br></br>
            <br></br>
            <span className="text-5xl font-bold dark:text-red-700">
              ${price}
            </span>
          </div>

          <br></br>

          <div className="text-center">
          <button className="text-white  hover:bg-red-800 focus:ring-4 hover:shadow-lg focus:outline-none focus:ring-red-300 font-medium text-2xl rounded-sm  px-5 py-2.5 w-60 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-20">
            Add to Cart
          </button>
          </div>

        </div>
      </div>
  );
};


export default ProductDetail;

