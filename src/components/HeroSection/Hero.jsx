import "../../index.css";
import cameraImg from "../../assets/banner.jpg";
import Gadgets from "../AllGadgets/Gadgets";
function Hero() {
  return (
    <>
      <div className="px-1 pb-1  border-x-[1px] border-b-[1px] rounded-b-2xl center relative">
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
              alt=""
            />
          </div>
        </div>
      </div>
      {/* all gadgets */}
      <div className="mt-[280px]">
        <Gadgets></Gadgets>
      </div>
    </>
  );
}

export default Hero;
