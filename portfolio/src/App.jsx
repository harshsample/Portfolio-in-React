import styles from "./App.module.css";
import About from "./Components/AboutMe/About";
import Hero from "./Components/Introduction/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
