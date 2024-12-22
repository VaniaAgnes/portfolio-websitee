import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Bina Nusantara International University (2022-2026) </h3>
              <p>
                I am currently an undergraduate student at Bina Nusantara International University, pursuing a degree in Computer Science.  
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cita Hati Christian High School (2016-2022) </h3>
              <p>
                I completed the IB Diploma Program in higschool and earned Cambridge O Level certificates during junior high school
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Vita Elementary School (2010-2016) </h3>
              <p>
                I completed my elementary education at Vita Elementary School
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
