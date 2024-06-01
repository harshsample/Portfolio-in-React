import React from "react";
import projects from "../../Data/Project.json";
import styles from "./Project.module.css";
import { getImageUrl } from "../../utils";
const Project = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.title}>Projects 📃</h1>
      <div className={styles.content}>
        <ul className={styles.projects}>
          {projects.map((project, id) => {
            return (
              <li key={id} className={styles.projectItem}>
                <img
                  src={getImageUrl(project.imageSrc)}
                  className={styles.projectImage}
                  alt="Project image "
                />
                <div className={styles.projectDetails}>
                  <h3>{project.title}</h3>
                  <p>
                    <li>{project.descriprion}</li>
                  </p>

                  <h4>
                    <span>Tech Stack : </span>
                    {project.TackStack}
                  </h4>

                  <a
                    className={styles.CodeLink}
                    href={project.code}
                    target="_blank"
                  >
                    Source Code
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Project;
