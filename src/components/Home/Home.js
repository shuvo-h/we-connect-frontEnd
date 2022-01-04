import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import Header from "./Header/Header";
import ServiceHeighlight from "./ServiceHeighlight/ServiceHeighlight";
import OurTeam from "./OurTeam/OurTeam";
import AboutOurWork from "./AboutOurWork/AboutOurWork";
import HappyCustomer from "./HappyCustomer/HappyCustomer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Header />
      <ServiceHeighlight></ServiceHeighlight>
      <AboutOurWork></AboutOurWork>
      <OurTeam></OurTeam>
      <HappyCustomer></HappyCustomer>
      <Footer />
    </div>
  );
};

export default Home;
