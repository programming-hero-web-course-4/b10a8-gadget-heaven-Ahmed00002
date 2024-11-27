import { useContext } from "react";
import { userData } from "../../contexts/Contexts";
import CartDetails from "../CartDetails/CartDetails";
import { cartDtls } from "../../contexts/Contexts";

function Carts() {
  const userDatas = useContext(userData);
  const { cart, totalCost, wishlist } = userDatas;
  return (
    <div className="space-y-4">
      {cart.map((product) => (
        <cartDtls.Provider
          key={product.product_id}
          value={{ product, totalCost, wishlist }}
        >
          <CartDetails></CartDetails>
        </cartDtls.Provider>
      ))}
    </div>
  );
}

export default Carts;
