import { useLocation } from "react-router-dom";
import { useTitle } from "../HeroSection/customHook/customHook";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Bar,
  CartesianGrid,
  Line,
} from "recharts";

function Statistics() {
  const location = useLocation();
  useTitle(location.pathname);
  const data = [
    {
      name: "Dell XPS 13",
      Price: 999.99,
      Total: 999.99,
      Rating: 4.7,
    },
    {
      name: "Apple MacBook Pro 14",
      Price: 1499.99,
      Total: 1499.99,
      Rating: 4.9,
    },
    {
      name: "HP Spectre x360",
      Price: 1299.99,
      Total: 1299.99,
      Rating: 4.6,
    },
    {
      name: "Lenovo ThinkPad X1 Carbon",
      Price: 1199.99,
      Total: 1199.99,
      Rating: 4.8,
    },
    {
      name: "Asus ZenBook 14",
      Price: 899.99,
      Total: 899.99,
      Rating: 4.5,
    },
    {
      name: "Microsoft Surface Laptop 4",
      Price: 1299.0,
      Total: 1299.0,
      Rating: 4.6,
    },
    {
      name: "Apple iPhone 15",
      Price: 1099.99,
      Total: 1099.99,
      Rating: 4.8,
    },
    {
      name: "Samsung Galaxy S24",
      Price: 999.99,
      Total: 999.99,
      Rating: 4.7,
    },
    {
      name: "Sony WH-1000XM5",
      Price: 349.99,
      Total: 349.99,
      Rating: 4.9,
    },
    {
      name: "Amazon Echo Dot 5th Gen",
      Price: 79.99,
      Total: 79.99,
      Rating: 4.6,
    },
  ];
  return (
    <div>
      <div className="text-center bg-primaryColor text-white py-8 space-y-4">
        <h1 className="text-3xl">Statistics</h1>
        <p className="w-3/6 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it
          all!Explore the latest gadgets that will take your experience to the
          next level. From smart devices to the coolest accessories, we have it
          all!
        </p>
      </div>

      {/* chart */}
      <div className="center mt-12 space-y-8">
        <h1 className="text-2xl font-bold">Statistics</h1>
        <div className=" flex justify-center items-center overflow-hidden box-border bg-white shadow-md rounded-xl px-8 py-8 border-[1px] border-gray-100">
          <ComposedChart width={1400} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="Total"
              fill="#8884d8"
              stroke="#8884d8"
            />
            Total
            <Bar dataKey="Price" barSize={30} fill="#413ea0" />
            <Line type="monotone" dataKey="Rating" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
