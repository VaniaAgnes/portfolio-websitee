import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vania 👋🏻</h1>
        <p className={styles.description}>
          "I'm a Computer Science undergraduate at Bina Nusantara International University, majoring in Computer Science and deeply interested in machine learning, data analysis, UI/UX, and their real-world applications. Outside of academics, I enjoy playing the piano, reading books, and doing pilates. Scroll down to know more about me!"
        </p>
        <div className={styles.buttons}>
          <a href="mailto:vaniadjunaedy@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a 
            href="/path/to/your/cv.pdf" // replace with your actual CV file path
            className={styles.cvBtn} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Open CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/profile-van.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

