import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import Slider from "../../components/Slider/Slider";
import WorkSection from "../../components/WorkSection/WorkSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Slider />
      <WorkSection />
    </>
  );
};

export default Home;
