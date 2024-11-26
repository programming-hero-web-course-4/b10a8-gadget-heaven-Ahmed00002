import { NavLink } from "react-router-dom";
import "../../index.css";
function Footer() {
  return (
    <>
      <footer className="py-24 mt-24 bg-gray-100">
        <div className="center">
          {/* website name and tag of footer */}
          <div className="text-center space-y-2 pb-8 border-b-2 border-gray-200">
            <h1 className="text-2xl font-bold">Gadget Haven</h1>
            <p className="text-paraColor">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>

          {/* footer links */}
          <div className="grid grid-cols-3 footer-links-container mt-6">
            <div className="text-center">
              <h1 className="text-lg font-bold">Services</h1>
              <div className="flex flex-col space-y-1 mt-3 text-paraColor">
                <NavLink>Product Support</NavLink>
                <NavLink>Order Tracking</NavLink>
                <NavLink>Shipping & Delivery</NavLink>
                <NavLink>Returns</NavLink>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <h1 className="text-lg font-bold">Company</h1>
              <div className="flex flex-col space-y-1 mt-3 text-paraColor">
                <NavLink>About Us</NavLink>
                <NavLink>Careers</NavLink>
                <NavLink>Contact</NavLink>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <h1 className="text-lg font-bold">Legal</h1>
              <div className="flex flex-col space-y-1 mt-3 text-paraColor">
                <NavLink>Terms of Serviece</NavLink>
                <NavLink>Privacy Policy</NavLink>
                <NavLink>Cookie Policy</NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
