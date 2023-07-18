import React from "react";
import styles from "./serviceSection.module.css";

const ServiceSection = () => {
  return (
    <div className={styles.container}>
      <h3>Services</h3>
      <div className={styles.content}>
        <p>
          Fusce ipsum odio, eleifend non massa cursus, luctus dapibus dui. Ut ac
          venenatis ex, vel bibendum felis. Pellentesque sollicitudin nec mi a
          viverra.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="181"
          height="181"
          viewBox="0 0 181 181"
          fill="none"
        >
          <path
            d="M90.5 0.5L135.5 12.5577L168.442 45.5L180.5 90.5L168.442 135.5L135.5 168.442L90.5 180.5L45.5 168.442L12.5577 135.5L0.5 90.5L12.5577 45.5L45.5 12.5577L90.5 0.5Z"
            fill="#D25941"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#FFF"
            fontFamily="Albra"
            fontSize="28px"
            fontStyle="normal"
            fontWeight="500"
          >
            <tspan x="50%" dy="-0.6em">
              Discover
            </tspan>
            <tspan x="50%" dy="1.2em">
              More
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ServiceSection;
