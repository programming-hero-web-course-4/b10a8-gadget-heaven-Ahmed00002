import { useContext } from "react";
import { cartDtls } from "../../contexts/Contexts";
import { FaDeleteLeft } from "react-icons/fa6";

function CartDetails() {
  const datas = useContext(cartDtls);
  const { product, removeFromCart } = datas;
  const { product_title, price, description, product_image } = product;

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
        <div className="col-span-8 flex justify-around flex-col">
          <h1 className="text-xl font-bold">{product_title}</h1>
          <p className="text-base text-paraColor">{description}</p>
          <p className="text-base font-semibold text-paraColor">
            Price: {price}$
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-end mr-8 text-2xl text-gray-500 hover:text-red-500 cursor-pointer">
          <FaDeleteLeft onClick={() => removeFromCart(product, true)} />
        </div>
      </div>
    </>
  );
}

export default CartDetails;
