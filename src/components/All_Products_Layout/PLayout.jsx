import { useContext } from "react";
import GadgetDetails from "../../GadgetDetails/GadgetDetails";
import { AllGadgetsData, gadgetDtls } from "../contexts/Contexts";

// css file
import "../../index.css";
function Gadgets() {
  // receiving gadgets data list through context api
  const gadgetsData = useContext(AllGadgetsData);
  console.log(gadgetsData);
  return (
    <>
      {/* all products lists */}
      <div className="grid grid-cols-3 gap-4 col-span-9">
        {/* extracting each category from the list */}
        {gadgetsData.map((gadget) =>
          // extracting each product object from the category to pass them for showing details
          gadget.products.map((data) => (
            <gadgetDtls.Provider key={data.product_id} value={data}>
              <GadgetDetails></GadgetDetails>
            </gadgetDtls.Provider>
          ))
        )}
      </div>
    </>
  );
}

export default Gadgets;
