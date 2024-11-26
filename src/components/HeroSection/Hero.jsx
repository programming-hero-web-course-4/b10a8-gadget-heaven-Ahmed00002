import "../../index.css";
import cameraImg from "../../assets/banner.jpg";
import Gadgets from "../AllGadgets/Gadgets";
import useTitle from "./customHook/customHook";
import { useLoaderData, useLocation } from "react-router-dom";
import { AllGadgetsData } from "../contexts/Contexts";
function Hero() {
  const location = useLocation();
  useTitle(location.pathname);
  const gadgetsData = useLoaderData();
  console.log(gadgetsData);
  return (
    <>
      <div className="center px-8">
        <div className="px-1 pb-1  border-x-[1px] border-b-[1px] rounded-b-2xl  relative">
          <div className="bg-primaryColor rounded-b-xl text-white flex flex-col items-center  gap-6 py-12 text-center px-12 pb-80">
            <h1 className="text-5xl font-bold font-sora w-5/6">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-base font-sora w-4/6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="px-8 py-2 rounded-full bg-white text-black font-bold">
              Shop Now
            </button>
          </div>
          {/* camera div */}
          <div>
            <div className="border-[1px] p-2 rounded-xl w-4/6 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-cameraBg">
              <img
                className="aspect-video object-cover rounded-xl"
                src={cameraImg}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* all gadgets */}
      <div className="mt-[280px]">
        <AllGadgetsData.Provider value={gadgetsData}>
          <Gadgets></Gadgets>
        </AllGadgetsData.Provider>
      </div>
    </>
  );
}

export default Hero;
