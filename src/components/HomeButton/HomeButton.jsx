import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../constants/routes";
import styles from "./homeButton.module.css";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.homeBtn} onClick={() => navigate(HOME)}>
        BACK TO HOMEPAGE
      </button>
    </>
  );
};

export default HomeButton;
