import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Hero from "../HeroSection/Hero";
import Footer from "../Footer/Footer";
// import { useState } from "react";

const Root = () => {
  // const [isHero, setIsHero] = useState();
  return (
    <>
      <header className="px-8">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
