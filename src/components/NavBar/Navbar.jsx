import { NavLink, useLocation, useParams } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./nav.css";
import "../../index.css";
import { useContext, useEffect, useState } from "react";
import { userData } from "../contexts/Contexts";

export default function Navbar() {
  const location = useLocation();
  const param = useParams();

  const detailsPath =
    location.pathname === `/${param.categoryName}/${param.id}` ? true : false;
  const [home, setHome] = useState(true);
  useEffect(() => {
    if (
      location.state == "home" ||
      location.state == null ||
      location.state == undefined
    ) {
      setHome(true);
    } else if (
      location.state == "statistics" ||
      location.state == "dashboard"
    ) {
      setHome(false);
    }
  }, [location.state]);

  // getting cart data through context api
  const userDatas = useContext(userData);
  const { cart, wishlist } = userDatas;

  return (
    <>
      <nav className="center px-8">
        <div
          className={`px-1 pt-1 ${
            home &&
            !detailsPath &&
            "border-x-[1px] border-t-[1px] rounded-t-2xl"
          }  center mt-4`}
        >
          <div
            className={`grid grid-cols-4 items-center justify-center   ${
              home && !detailsPath
                ? "bg-primaryColor text-white"
                : "bg-white text-black"
            } py-6 rounded-t-xl px-12`}
          >
            <div>
              <h1 className="text-2xl font-semibold col-span-1">
                Gadget Haven
              </h1>
            </div>
            {/* navLinks */}
            <div className="flex justify-center items-center gap-6 sidebar col-span-2">
              <NavLink
                className="px-4 py-1 rounded-full"
                state={"home"}
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className="px-4 py-1 rounded-full"
                state={"dashboard"}
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
              <NavLink
                className="px-4 py-1 rounded-full"
                state={"statistics"}
                to={"/statistics"}
              >
                Statistics
              </NavLink>
              <NavLink
                className="px-4 py-1 rounded-full"
                state={"statistics"}
                to={"/about-us"}
              >
                About Us
              </NavLink>
            </div>
            <div className="justify-self-end flex items-center gap-6 text-lg  text-black col-span-1">
              {/* cart icon */}
              <div className="relative bg-gray-200 rounded-full p-2 cursor-pointer">
                <FaOpencart />
                <div className="cart-count">
                  <span className="">{cart.length}</span>
                </div>
              </div>
              {/* wishlist icon */}
              <div className="relative bg-gray-200 rounded-full p-2 cursor-pointer">
                <CiHeart />
                <div className="cart-count">
                  <p>{wishlist.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
