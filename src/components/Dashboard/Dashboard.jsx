import { GoSortDesc } from "react-icons/go";
import { useLocation } from "react-router-dom";
import useTitle from "../HeroSection/customHook/customHook";
function Dashboard() {
  const location = useLocation();

  useTitle(location.pathname);
  return (
    <>
      <div>
        {/* dashboard section header */}
        <div className="text-center bg-primaryColor text-white py-8 space-y-4">
          <h1 className="text-3xl">Dashboard</h1>
          <p className="w-3/6 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-6">
            <button className="px-16 py-2 rounded-full font-medium bg-white text-black">
              Cart
            </button>
            <button className="px-16 py-2 rounded-full font-medium bg-none border-2 text-white">
              Whishlist
            </button>
          </div>
        </div>
        {/* cart details and info */}
        <div className="flex justify-between items-center center py-8">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="flex gap-4 items-center">
            <p className="text-2xl font-bold">Total cost: 9999$</p>
            <button className="btn text-primaryColor border-[1px] border-primaryColor text-lg flex justify-center items-center gap-2">
              Sort by price <GoSortDesc />
            </button>
            <button className="btn text-white bg-primaryColor text-lg">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
