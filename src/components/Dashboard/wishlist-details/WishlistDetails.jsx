import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { wishlistDtls } from "../../contexts/Contexts";

function CartDetails() {
  const datas = useContext(wishlistDtls);
  const { wishProduct, removeFromCart, updateOrGetCart } = datas;
  const { product_title, price, description, product_image } = wishProduct;
  const handleOnAdd = () => {
    updateOrGetCart(wishProduct);
    removeFromCart(wishProduct, false);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4 shadow-md rounded-xl">
        <div className="col-span-2 bg-purple-50 rounded-xl flex justify-center items-center">
          <img
            className="h-28 object-contain"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div className="col-span-8 space-y-2">
          <h1 className="text-xl font-bold">{product_title}</h1>
          <p className="text-base text-paraColor">{description}</p>
          <p className="text-base font-semibold text-paraColor">
            Price: {price}$
          </p>
          <div>
            <button
              onClick={handleOnAdd}
              className="btn btn-sm bg-primaryColor text-white rounded-full hover:bg-transparent hover:border-[1px] hover:border-primaryColor hover:text-primaryColor"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div
          onClick={() => removeFromCart(wishProduct, false)}
          className="col-span-2 flex items-center justify-end mr-8 text-2xl text-gray-500 hover:text-red-500 cursor-pointer"
        >
          <FaDeleteLeft />
        </div>
      </div>
    </>
  );
}

export default CartDetails;
