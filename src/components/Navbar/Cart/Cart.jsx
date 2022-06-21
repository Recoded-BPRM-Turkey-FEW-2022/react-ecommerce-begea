function Cart() {
  return (
    <div className="flex p-8 w-9/12 h-48 border-r-5 ">
      <div className="max-w-sm flex justify-center w-1/4 mr-8 ">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product image"
          className=" w-auto h-32 sm:h-48 object-cover"
        />
      </div>
      <div className="w-3/4 flex flex-col justify-around">
        <div className="flex justify-between">
          <p>Kaft Bag</p>
          <p>$25</p>
        </div>
        <div className="flex justify-between">
          <input
            className="border rounded-md p-1 w-28"
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            max="10"
            placeholder="Quantity"
          />
          <button className="border rounded-md flex justify-center items-center pl-2 pr-2 h-auto bg-red-500 text-white font-bold ">
            Delete{" "}
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
