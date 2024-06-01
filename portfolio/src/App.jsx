import styles from "./App.module.css";
import About from "./Components/AboutMe/About";
import Card from "./Components/Card";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Hero from "./Components/Introduction/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      {/* <Education /> */}
      {/* <Card /> */}
    </div>
  );
}

export default App;
