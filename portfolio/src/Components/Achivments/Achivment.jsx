import React from "react";
import achivment from "../../Data/Achivment.json";
import styles from "./Achivment.module.css";
import AchivmentCard from "./AchivmentCard";
const Achivment = () => {
  return (
    <section className={styles.container} id="achivment">
      <h2 className={styles.title}>Achivments 🏆</h2>
      <div className={styles.experience}>
        {achivment.map((ach, id) => {
          // rename the parameter to avoid conflict
          return <AchivmentCard key={id} {...ach} />;
        })}
      </div>
    </section>
  );
};

export default Achivment;
