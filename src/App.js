import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <main className="App">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
