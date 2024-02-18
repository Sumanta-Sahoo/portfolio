import Contact from "./Components/Contact/Contact";
import Parallax from "./Components/Parallax/Parallax";
import PortProject from "./Components/PortProject/PortProject";
import Skills from "./Components/Skills/Skills";
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
    <section>
      <Skills></Skills>
    </section>
    <section id="Projects">
      <Parallax type="projects"></Parallax>
    </section>
    <PortProject></PortProject>
    {/*Update this section after creating full stack application and make contribution to opensource projects*/}
    {/* <section id="Collaborations">
      Collab Parallax
    </section>
    <section>Collaboration</section> */}
    <section id="Contact">
      <Contact></Contact>
    </section>


  </div>
};

export default App;
