import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ExperienceCard.module.css";
const ExperienceCard = ({
  imageSrc, // renamed from `experience`
  title,
  company,
  duration,
  workAs,
  description,
  technology,
}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} className={styles.image} alt="Image" />
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.company}>{company}</h3>
      <ul className={styles.ulStyle}>
        <li className={styles.liStyle}>{workAs}</li>
        <li className={styles.liStyle}>{technology}</li>
        <li className={styles.liStyle}>{duration}</li>
        <li className={styles.liStyle}>{description}</li>
      </ul>
    </div>
  );
};

export default ExperienceCard;
