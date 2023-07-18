import React from "react";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h1>Praesent pharetra turpis nisi</h1>
      <div className={styles.shapes}>
        <div className={styles.oval}></div>
        <div className={styles.rectangle}></div>
        <div className={styles.hexagon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="173"
            height="200"
            viewBox="0 0 173 200"
            fill="none"
          >
            <g clipPath="url(#clip0_33_121)">
              <path
                d="M87 0L173.603 50V150L87 200L0.397461 150V50L87 0Z"
                fill="#D25941"
              />
            </g>
            <defs>
              <clipPath id="clip0_33_121">
                <rect width="173" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.circle}></div>
        <div className={styles.big_rec}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="355"
            height="260"
            viewBox="0 0 355 260"
            fill="none"
          >
            <path
              d="M355 0L177.5 260L-1.1365e-05 260L177.5 -7.75877e-06L355 0Z"
              fill="#C6B1EB"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
