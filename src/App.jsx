import Contact from "./Components/Contact/Contact";
import Curson from "./Components/Cursor/Curson";
// import Parallax from "./Components/Parallax/Parallax";
import PortProject from "./Components/PortProject/PortProject";
import Skills from "./Components/Skills/Skills";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navabr/Navbar";
import "./App.scss";

const App = () => {
  return <div>
    <Curson></Curson>
    <section id="Homepage" >
      <Navbar></Navbar>
      <Hero></Hero>
    </section>
    <PortProject></PortProject>
    <section>
      <Skills></Skills>
    </section>
    {/* <section id="Projects">
      <Parallax type="projects"></Parallax>
    </section> */}
    {/* Update this section after creating full stack application and make contribution to opensource projects */}
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
