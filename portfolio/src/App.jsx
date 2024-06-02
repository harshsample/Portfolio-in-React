import styles from "./App.module.css";
import About from "./Components/AboutMe/About";
import Achivment from "./Components/Achivments/Achivment";

// import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
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
      <Achivment />
      {/* <Education /> */}
      <Footer />
      {/* <Education /> */}
    </div>
  );
}

export default App;
