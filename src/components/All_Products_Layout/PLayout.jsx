import { useContext } from "react";
import GadgetDetails from "../../GadgetDetails/GadgetDetails";
import { AllGadgetsData, gadgetDtls } from "../contexts/Contexts";

// css file
import "../../index.css";
import { useParams } from "react-router-dom";
import NoCetegory from "./noCategory/NoCetegory";
function Gadgets() {
  // receiving gadgets data list through context api
  const gadgetsData = useContext(AllGadgetsData);
  const param = useParams();
  return (
    <>
      {/* all products lists */}
      <div className="grid grid-cols-3 gap-4 col-span-9">
        {/* extracting each category from the list */}
        {gadgetsData.length != 0 ? (
          gadgetsData.map((gadget) =>
            // extracting each product object from the category to pass them for showing details
            gadget.products.map((data) => (
              <gadgetDtls.Provider key={data.product_id} value={data}>
                <GadgetDetails></GadgetDetails>
              </gadgetDtls.Provider>
            ))
          )
        ) : (
          <NoCetegory names={param.categoryName}></NoCetegory>
        )}
      </div>
    </>
  );
}

export default Gadgets;
