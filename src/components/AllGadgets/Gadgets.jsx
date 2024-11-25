import { useEffect, useState } from "react";
import GadgetDetails from "../../GadgetDetails/GadgetDetails";
import { gadgetDtls } from "../contexts/Contexts";
// css file
import "../../index.css";

function Gadgets() {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  // data context
  return (
    <div className="center">
      <h1 className="text-3xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="my-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 ">
            <div className=" flex flex-col p-6 space-y-6  rounded-xl shadow-lg h-auto border-[1px] border-gray-100">
              <button className="category-btn">All Products</button>
              <button className="category-btn">Laptops</button>
              <button className="category-btn">Phones</button>
              <button className="category-btn">Smart Gadget</button>
            </div>
          </div>
          {/* all products lists */}
          <div className="grid grid-cols-3 gap-4 col-span-9">
            {gadgets.map((gadget) =>
              gadget.products.map((data) => (
                <gadgetDtls.Provider key={data.product_id} value={data}>
                  <GadgetDetails></GadgetDetails>
                </gadgetDtls.Provider>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gadgets;
