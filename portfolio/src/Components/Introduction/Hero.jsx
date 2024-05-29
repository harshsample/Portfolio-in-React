import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Harsh</h2>
        <p className={styles.description}>
          I'am a full stack developer with 5 years experience using ract and
          node js. reach out if you like to learn more.
        </p>
        <a href="mailto:ranaharsh020@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="its me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
