function CardView({ categories, title, price, image }) {
  return (
    <div className="bg-white font-Roboto grid rounded-xl p-4 overflow-hidden shadow-md hover:shadow-xl w-64 transition-all duration-300">
      <div className="max-w-sm flex justify-center mb-4">
        <img
          src={image}
          alt="product image"
          className="w-auto h-32 sm:h-48 object-cover"
        />
      </div>
      <div className=" mb-3 flex flex-col items-center ">
        <p className=" mb-2 block font-medium leading-5">{title}</p>
        <p className=" text-sm mb-1 font-extralight">{categories}</p>
        <p className=" text-md font-normal">$ {price}</p>
      </div>
    </div>
  );
}

export default CardView;
