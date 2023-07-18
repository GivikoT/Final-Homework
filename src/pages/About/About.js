import React, { useEffect } from "react";
import AboutSection from "../../components/AboutSection/AboutSection";

const About = () => {
  useEffect(() => {
    document.title = "Paga | About Us";

    return () => {
      document.title = "Paga | Home";
    };
  }, []);

  return (
    <>
      <AboutSection />
    </>
  );
};

export default About;
