import "./App.css";
import Contact from "./Pages/Contact Me/Contact";
import { Homepage } from "./Pages/Homepage/Homepage";
import Projects from "./Pages/MyProjects/Projects";

function App() {
  return (
    <div className="main-page">
      <Homepage />
      <Projects />
      <Contact />
      {/* <ProjectInfo /> */}
    </div>
  );
}

export default App;
