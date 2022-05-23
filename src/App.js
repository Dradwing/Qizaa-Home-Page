import "./App.css";
import React from "react";
import Menu from "./components/menuBar";
import Carousel from "./components/carousel";
import Offer from "./components/offer";
import Shop from "./components/shop";
import WhyUs from "./components/whyUs";
import Brands from "./components/brands";
import JoinUs from "./components/joinUs";
function App() {
  return (
    <div className="app">
      <Menu />
      <Carousel />
      <Offer />
      <Shop />
      <WhyUs />
      <Brands />
      <JoinUs />
    </div>
  );
}

export default App;
