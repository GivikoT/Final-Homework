import React from "react";
import Paga from "../../images/Paga.png";
import styles from "./aboutSection.module.css";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../constants/routes";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.aboutSection}>
      <div className={styles.heading}>
        <h1>About Us</h1>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.heroContent}>
          <h2>Welcome To Our Website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            a pellentesque sit amet. Leo urna molestie at elementum eu facilisis
            sed. Nisi porta lorem mollis aliquam ut porttitor leo a diam.
            Tincidunt tortor aliquam nulla facilisi cras. Sit amet volutpat
            consequat mauris nunc congue nisi vitae suscipit.
          </p>
          <button onClick={() => navigate(HOME)}>Learn More</button>
        </div>
        <div className={styles.imageBox}>
          <img className={styles.image} src={Paga} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
