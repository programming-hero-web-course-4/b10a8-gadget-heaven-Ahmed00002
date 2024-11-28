import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { userData } from "../contexts/Contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "../Modals/SuccessModal/Success";

const Root = () => {
  /**
   * state for the cart list
   * */
  const [cart, setCart] = useState([]);
  // const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  /**
   * state for wishlist items
   * */
  const [wishlist, setWishlist] = useState([]);
  const [showModals, setShowModals] = useState(false);
  const showModal = (clicked) => {
    if (clicked) {
      setShowModals(true);
      setCart([]);
    } else {
      setShowModals(false);
      setCartTotal(0);
    }
  };

  // this function will do summation for the products that is in cart list

  // useEffect(() => {
  //   cart.map((data) => {
  //     setCartTotal(cartTotal + data.price);
  //   });
  // }, [cart.length]);

  /**
   * this is cart function.
   * it will add product object to the cart
   * also if the cart is not empty it will update the cart with the existing cart
   * */
  const updateOrGetCart = (data) => {
    // console.log(cart);
    if (cart.length === 0 && data.availability) {
      setCartTotal(cartTotal + data.price);

      setCart([data]);
      toast.success(`${data.product_title} added to your cart`);
    } else if (cart.find((m) => m.product_id === data.product_id)) {
      toast.error(`${data.product_title} already added to the cart`);
    } else if (data.availability === false) {
      toast.info(`${data.product_title} is out of stock`);
    } else {
      setCartTotal(cartTotal + data.price);
      const newCart = [...cart, data];
      setCart(newCart);
      // show success toast to the user
      toast.success(`${data.product_title} added to your cart`);
    }
  };

  /**
   * this function will delete a specific data from cartList or wishlist
   * it depends on user, which data they wanna remove from the cartList
   * */
  const removeFromCart = (itemData, bool) => {
    if (bool) {
      setCartTotal(cartTotal - itemData.price);
      const newCart = cart.filter(
        (cart) => cart.product_id != itemData.product_id
      );
      setCart(newCart);
    } else {
      const newWishlist = wishlist.filter(
        (data) => data.product_id != itemData.product_id
      );
      setWishlist(newWishlist);
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

  // sort the cart list
  const sortCart = (cartList) => {
    const newCart = [...cartList].sort((a, b) => b.price - a.price);
    setCart(newCart);
  };
  return (
    <>
      <userData.Provider
        value={{
          updateOrGetCart, //for updating the cart data
          updateOrGetWishlist, // fot updating the wishlist data
          cart, //passing the cart data for showing in the ui
          cartTotal, //function to calculate the total cart prices
          // totalCartAmount, //it is containing the data of "how many items are added to the cart"
          wishlist, //data of wishlist
          sortCart, //function for sorting the cart
          removeFromCart, // filter out and remove data from cart
          showModal, //show modal when clicked the purchase button
        }}
      >
        <Navbar></Navbar>
        <Outlet></Outlet>
        {showModals && <Success props={{ cartTotal, showModal }}></Success>}
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
