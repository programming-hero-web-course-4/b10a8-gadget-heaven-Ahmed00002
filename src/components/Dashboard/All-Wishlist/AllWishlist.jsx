import { useContext } from "react";
import { userData } from "../../contexts/Contexts";
import { wishlistDtls } from "../../contexts/Contexts";
import WishlistDetails from "../wishlist-details/WishlistDetails";
function Carts() {
  const userDatas = useContext(userData);
  const { wishlist, removeFromCart, updateOrGetCart } = userDatas;
  return (
    <div className="space-y-4">
      {wishlist.map(
        (wishProduct, idx) => (
          console.log(wishProduct),
          (
            <wishlistDtls.Provider
              key={idx}
              value={{
                wishProduct,
                removeFromCart,
                updateOrGetCart,
              }}
            >
              <WishlistDetails></WishlistDetails>
            </wishlistDtls.Provider>
          )
        )
      )}
    </div>
  );
}

export default Carts;
