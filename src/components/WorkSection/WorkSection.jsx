import React from "react";
import Image from "../../images/image.png";
import styles from "./worksection.module.css";
import { workServices } from "../../constants/data";

const WorkSection = () => {
  return (
    <div className={styles.work_container}>
      <h3>Selected Works</h3>
      <ul>
        {workServices.map((item) => (
          <li key={item.id}>
            <div className={styles.item_title}>
              <span className={item.titleClass}>{item.name}</span>
              <span className={item.yearClass}>{item.date}</span>
            </div>
            <img src={Image} alt="festival" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSection;
