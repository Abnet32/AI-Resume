import React from "react";
import Banner from "../components/Home/Banner";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Testimonial from "../components/Home/Testimonial";
import CallToAction from "../components/Home/CallToAction";
import Footer from "../components/Home/Footer";
import Pricing from "../components/Home/Pricing";
import Login from "./Login";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      {/* <Pricing /> */}
      <Testimonial />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
