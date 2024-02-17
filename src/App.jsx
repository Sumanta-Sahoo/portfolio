import Parallax from "./Components/Parallax/Parallax";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navabr/Navbar";
import "./app.scss";

const App = () => {
  return <div>
    <section id="Homepage" >
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    <section id="Skills">
      <Parallax type="skills"></Parallax>
    </section>
    <section>Skills</section>
    <section id="Projects">
      <Parallax type="projects"></Parallax>
    </section>
    <section>Project1</section>
    <section>Project2</section>
    <section>Project2</section>
    <section id="Collaborations">Parallax</section>
    <section>Collaboration</section>
    <section id="Contact">Contact</section>


  </div>
};

export default App;
