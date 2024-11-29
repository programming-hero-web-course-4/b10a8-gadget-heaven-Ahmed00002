import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Error from "./components/ErrorComponent/Error";
import Hero from "./components/HeroSection/Hero";
import Dashboard from "./components/Dashboard/Dashboard";
import Statistics from "./components/Statistics/Statistics";
import PDetails from "./components/Full-PDetails/PDetails";
import AboutUs from "./components/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/",
        element: <Hero />,
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/about-us",
        element: <AboutUs />,
        loader: async () => {
          const res = await fetch("/features.json");
          const data = await res.json();

          return data;
        },
      },
      {
        path: ":categoryName",
        element: <Hero />,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          console.log(data);
          const category = data.filter(
            (category) => category.category_name == params.categoryName
          );
          console.log(category);
          return category;
        },
      },
      // dynamic single product routs
      {
        path: "/:categoryName/:id",
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();

          return data;
        },
        element: <PDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
