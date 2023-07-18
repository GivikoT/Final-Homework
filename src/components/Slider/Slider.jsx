import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./slider.module.css";
import { services } from "../../constants/data";

const Slider = () => {
  return (
    <div className={styles.services}>
      <Marquee className={styles.slider} pauseOnHover={true} speed={130}>
        {services.map((service) => (
          <span key={service.id} className={service.className}>
            {service.name}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
