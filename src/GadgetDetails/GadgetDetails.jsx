import { useContext } from "react";
import { gadgetDtls } from "../components/contexts/Contexts";
import { Link } from "react-router-dom";

function GadgetDetails() {
  const data = useContext(gadgetDtls);
  const { product_title, price, product_image, product_id, category } = data;
  return (
    <>
      <div className="border-[1px] rounded-xl p-5 shadow-lg cursor-pointer hover:scale-105 transition-all flex flex-col">
        <div className="bg-purple-50 rounded-xl p-1">
          <img
            className="aspect-video object-cover "
            src={product_image}
            alt={`image of ${product_title}`}
          />
        </div>
        <div className="flex flex-col gap-2  flex-grow">
          <h1 className="text-xl font-semibold mt-4">{product_title}</h1>
          <p className="text-paraColor">Price: {price}$</p>
          <div className="flex-grow flex items-end justify-start ">
            <Link to={`/${category}/${product_id}`}>
              <button className="px-4 py-2 rounded-full border-[1px] border-purple-600 ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GadgetDetails;
