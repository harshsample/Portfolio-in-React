import React from "react";
import experience from "../../Data/Experience.json";
import ExperienceCard from "./ExperienceCard";
import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience 💼</h2>
      <div className={styles.experience}>
        {experience.map((exp, id) => {
          // rename the parameter to avoid conflict
          return <ExperienceCard key={id} {...exp} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
