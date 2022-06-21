function CardView() {
  return (
    <div className="bg-white rounded-xl p-4 overflow-hidden shadow-md w-64 ">
      <div className="max-w-sm flex justify-center mb-4">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product image"
          className="w-auto h-32 sm:h-48 object-cover"
        />
      </div>
      <div className="mb-5 flex flex-col items-center">
        <p className="font-bold block mb-1 leading-3">Product Name</p>
        <p className="text-sm">Categories</p>
        <p className="font-bold text-lg ">$25</p>
      </div>
      <div className="flex justify-between items-center">
        <input
          className="border rounded-md p-3 w-28"
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="10"
          placeholder="Quantity"
        />
        <button className="border rounded-md p-3 bg-green-50">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default CardView;
