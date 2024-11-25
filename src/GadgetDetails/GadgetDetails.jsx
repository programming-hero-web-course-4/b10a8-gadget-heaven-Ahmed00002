import { useContext } from "react";
import { gadgetDtls } from "../components/contexts/Contexts";

function GadgetDetails() {
  const data = useContext(gadgetDtls);
  console.log(data);
  const { product_title, price, product_image } = data;
  return (
    <>
      <div className="border-[1px] rounded-xl p-5 shadow-lg cursor-pointer hover:scale-105 transition-all">
        <div className="bg-purple-50 rounded-xl p-1">
          <img
            className="aspect-video object-cover "
            src={product_image}
            alt={`image of ${product_title}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">{product_title}</h1>
          <p className="text-paraColor">Price: {price}$</p>
          <div className="flex-grow flex items-end justify-start">
            <button className="px-4 py-2 rounded-full border-[1px] border-purple-600 text-purple-500">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GadgetDetails;
