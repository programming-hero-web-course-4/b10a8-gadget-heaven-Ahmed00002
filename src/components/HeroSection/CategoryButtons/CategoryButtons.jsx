import { NavLink } from "react-router-dom";
import "../../../index.css";

function CategoryButtons() {
  return (
    <>
      <div className="col-span-3 categories">
        <div className=" flex flex-col p-6 space-y-6  rounded-xl shadow-lg h-auto border-[1px] border-gray-100">
          <NavLink to={"/"}>
            <button className="category-btn w-full">All Products</button>
          </NavLink>
          <NavLink to={"/Laptop"}>
            <button className="category-btn w-full">Laptops</button>
          </NavLink>
          <NavLink to={"/Mobile"}>
            <button className="category-btn w-full">Phones</button>
          </NavLink>
          <NavLink to={"/Gadgets"}>
            <button className="category-btn w-full">Smart Gadget</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default CategoryButtons;
