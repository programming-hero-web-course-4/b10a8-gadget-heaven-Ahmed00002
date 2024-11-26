// css file
import "../../index.css";
import CategoryButtons from "../HeroSection/CategoryButtons/CategoryButtons";
import PLayout from "../All_Products_Layout/PLayout";

function Gadgets() {
  return (
    <div className="center">
      <h1 className="text-3xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="my-8">
        <div className="grid grid-cols-12 gap-6">
          <CategoryButtons></CategoryButtons>
          <PLayout></PLayout>
        </div>
      </div>
    </div>
  );
}

export default Gadgets;
