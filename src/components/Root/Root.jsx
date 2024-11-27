import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { userData } from "../contexts/Contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  /**
   * state for the cart list
   * */
  const [cart, setCart] = useState([]);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  /**
   * state for wishlist items
   * */
  const [wishlist, setWishlist] = useState([]);

  // this function will do summation for the products that is in cart list
  const totalCost = (amount) => {
    setTotalCartAmount(totalCartAmount + amount);
  };
  /**
   * this is cart function.
   * it will add product object to the cart
   * also if the cart is not empty it will update the cart with the existing cart
   * */
  const updateOrGetCart = (data) => {
    // console.log(cart);
    if (cart.length === 0 && data.availability) {
      setCart([data]);
      toast.success(`${data.product_title} added to your cart`);
    } else if (cart.find((m) => m.product_id === data.product_id)) {
      toast.error(`${data.product_title} already added to the cart`);
    } else if (data.availability === false) {
      toast.info(`${data.product_title} is out of stock`);
    } else {
      const newCart = [...cart, data];
      setCart(newCart);
      // show success toast to the user
      toast.success(`${data.product_title} added to your cart`);
    }
  };

  /**
   * this is wishlist function.
   * it will add product object to the wishlist
   * also if the cart is not empty it will update the wishlist with the existing wishlist data
   * */
  const updateOrGetWishlist = (wishlistData) => {
    if (wishlist.length === 0) {
      setWishlist([wishlistData]);
      toast.success(`${wishlistData.product_title} added to your wishlist`);
    } else if (wishlist.find((m) => m.product_id === wishlistData.product_id)) {
      toast.error(
        `${wishlistData.product_title} already added to the wishlist`
      );
    } else if (wishlistData.availability === false) {
      toast.info(`${wishlistData.product_title} is out of stock`);
    } else {
      const newWishlist = [...wishlist, wishlistData];
      setWishlist(newWishlist);
      // show success toast to the user
      toast.success(`${wishlistData.product_title} added to your wishlist`);
    }
  };
  console.log(wishlist);
  return (
    <>
      <userData.Provider
        value={{
          updateOrGetCart, //for updating the cart data
          updateOrGetWishlist, // fot updating the wishlist data
          cart, //passing the cart data for showing in the ui
          totalCost, //function to calculate the total cart prices
          totalCartAmount, //it is containing the data of "how many items are added to the cart"
          wishlist, //data of wishlist
        }}
      >
        <Navbar></Navbar>
        <Outlet></Outlet>
      </userData.Provider>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default Root;
