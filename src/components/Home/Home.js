import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import Header from "./Header/Header";
import ServiceHeighlight from "./ServiceHeighlight/ServiceHeighlight";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Header />
      <ServiceHeighlight></ServiceHeighlight>
      <Footer />
    </div>
  );
};

export default Home;
