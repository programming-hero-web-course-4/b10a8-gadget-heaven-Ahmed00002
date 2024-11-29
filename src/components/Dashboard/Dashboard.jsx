import { GoSortDesc } from "react-icons/go";
import { useLocation } from "react-router-dom";
import { useTitle } from "../HeroSection/customHook/customHook";
import AllWishlist from "./All-Wishlist/AllWishlist";
import { useContext, useState } from "react";
import { userData } from "../contexts/Contexts";
import Carts from "./All-carts/Carts";
function Dashboard() {
  const location = useLocation();
  // it will change the website title dynamically
  useTitle(location.pathname);

  // getting user data
  const userDatas = useContext(userData);
  let { totalCartAmount, sortCart, cart, cartTotal, showModal } = userDatas;

  // toggle to cart to wishlist menu
  const [toggle, setToggle] = useState(true);
  const [cartSelected, setCartSelected] = useState(true);

  const doToggle = () => {
    if (cartSelected) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  const manageOnClick = (func) => {
    func;

    doToggle();
  };

  return (
    <>
      <div>
        {/* dashboard section header */}
        <div className="text-center bg-primaryColor text-white py-8 space-y-4">
          <h1 className="text-3xl">Dashboard</h1>
          <p className="w-3/6 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-6">
            <button
              onClick={() => manageOnClick(setCartSelected(true))}
              className={`px-16 py-2 rounded-full font-medium ${
                cartSelected === true
                  ? "bg-white text-black"
                  : "bg-none border-2 text-white"
              } `}
            >
              Cart
            </button>
            <button
              onClick={() => manageOnClick(setCartSelected(false))}
              className={`px-16 py-2 rounded-full font-medium ${
                cartSelected === false
                  ? "text-black bg-white border-none"
                  : "bg-none border-2 text-white"
              }`}
            >
              Whishlist
            </button>
          </div>
        </div>
        {/* cart details and info */}
        <div className="flex justify-between items-center center py-8">
          <h1 className="text-2xl font-bold">
            {cartSelected ? "Cart" : "Wishlist"}
          </h1>
          <div className="flex gap-4 items-center">
            <p
              className={`text-2xl font-bold ${
                cartSelected === false && "hidden"
              }`}
            >
              Total cost: {cartTotal.toFixed(2)}$
            </p>
            <button
              onClick={() => sortCart(cart)}
              className={`btn bg-transparent text-primaryColor border-[1px] border-primaryColor text-lg flex justify-center items-center gap-2 hover:bg-primaryColor hover:text-white hover:rounded-full ${
                cartSelected === false && "hidden"
              }`}
            >
              Sort by price <GoSortDesc />
            </button>
            <button
              onClick={() => showModal(true)}
              disabled={cart.length === 0 && true}
              className={`btn btn-md rounded-full text-white bg-primaryColor text-xl  hover:bg-primaryColor ${
                cartSelected === false && "hidden"
              }`}
            >
              Purchase
            </button>
          </div>
        </div>
        {/* show carts */}
        <div className="center">
          {cartSelected ? <Carts></Carts> : <AllWishlist></AllWishlist>}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
