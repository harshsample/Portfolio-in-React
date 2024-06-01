import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Harsh</h2>
        <p className={styles.description}>
          Seeking an opportunity to work for an organization that values
          professional development and provides a platform to enhance skills and
          knowledge. Committed to achieving both organizational and personal
          goals, I thrive in dynamic environments and actively contribute to the
          success of the team.
        </p>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/harshsample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("socials/github.png")}
              alt="GitHub"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-rana-57528a267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("socials/linkedin.png")}
              alt="LinkedIn"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://x.com/ranaharsh020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("socials/twitter.png")}
              alt="X"
              className={styles.socialIcon}
            />
          </a>
        </div>
        <a href="mailto:ranaharsh020@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Hero.svg")}
        alt="it's me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
