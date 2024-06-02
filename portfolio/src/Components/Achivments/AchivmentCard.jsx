import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./AchivmentCard.module.css";
const AchivmentCard = ({
  imageSrc, // renamed from `experience`
  title,
  description,
  link,
}) => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank">
        <img src={getImageUrl(imageSrc)} className={styles.image} alt="Image" />
      </a>
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.ulStyle}>
        <li className={styles.liStyle}>{description}</li>
      </ul>
    </div>
  );
};

export default AchivmentCard;
