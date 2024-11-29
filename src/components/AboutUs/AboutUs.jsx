import { useLoaderData } from "react-router-dom";
import FeaturesCard from "./features-card/FeaturesCard";

function AboutUs() {
  const features = useLoaderData();
  return (
    <div>
      <div className="text-center bg-primaryColor text-white py-8 space-y-4">
        <h1 className="text-3xl">About Us</h1>
        <p className="w-3/6 mx-auto">
          Unlock the digital future with smart gadgets – delivering a seamless,
          efficient, and modern lifestyle through cutting-edge technology
        </p>
      </div>
      <div className="center mt-8">
        <h1 className="text-2xl font-bold text-center">
          Why You Should Choose Us
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {features.map((feature, idx) => (
            <FeaturesCard key={idx} feature={feature}></FeaturesCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
