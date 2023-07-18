import React from "react";
import ErrorImage from "../../images/404.png";
import styles from "./errorSection.module.css";
import HomeButton from "../HomeButton/HomeButton";

const ErrorSection = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Oops! Page Not Found</h2>
      <div>
        <img src={ErrorImage} alt="error" />
      </div>
      <h4>We couldn&apos;t find the page you&apos;re looking for</h4>
      <HomeButton />
    </div>
  );
};

export default ErrorSection;
