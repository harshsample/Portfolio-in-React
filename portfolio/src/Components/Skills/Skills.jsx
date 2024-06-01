import React from "react";
import skills from "../../Data/Skills.json";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>What i Do 👇</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt="Skills Image" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.description}>
          <li className={styles.descriptionItem}>
            🚀 Bridging the front-end and back-end: Crafting seamless user
            experiences with a full-stack approach.
          </li>
          <li className={styles.descriptionItem}>
            🚀 Building a foundation for innovation: Expanding my knowledge base
            with an MSc ICT.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
