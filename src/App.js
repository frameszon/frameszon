import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Intro from "./Components/Intro";
import Outro from "./Components/Outro";
import Categories from "./Components/Categories";
// import Gender from "./Components/Gender";
// import Range from "./Components/Range";
import MenBestsellers from "./Components/MenBestsellers";
import WomenBestsellers from "./Components/WomenBestsellers";
import About from "./Components/About";
import InternationalBrands from "./Components/InternationalBrands";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <Banner />
      <InternationalBrands />
      <Intro />
      <MenBestsellers />
      <WomenBestsellers />
      <Header />
      <Categories />
      {/* <Range /> */}
      {/* <Gender /> */}
      <About />
      <Outro />
      <Footer />
    </div>
  );
};

export default App;
