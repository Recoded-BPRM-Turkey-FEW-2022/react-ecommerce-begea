function CardView({ categories, title, price, image }) {
  return (
    <div className="bg-white font-Roboto grid rounded-xl p-4 overflow-hidden shadow-md hover:shadow-xl w-64">
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
      <div className="font-Roboto flex justify-between items-center">
        <input
          className="font-Roboto border rounded-md font-extralight text-sm p-1 m-1 w-20"
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="10"
          placeholder="Quantity"
        />
        <button className="p-2">
          <img className="flex m-2" src="assets/cart.png"></img>
        </button>
      </div>
    </div>
  );
}

export default CardView;
