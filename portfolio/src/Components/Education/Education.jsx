import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        <div className={styles.educationItemLeft}>
          <h3>Bachelor's Degree in Computer Science</h3>
          <p>XYZ University, 2016-2020</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.educationItemRight}>
          <h3>Master's Degree in Software Engineering</h3>
          <p>ABC University, 2021-2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
