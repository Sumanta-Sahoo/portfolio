import "./PortProject.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Book Management System (SpringBoot Application)",
    img: "/mockUp1.png",
    desc: "This Spring Boot app manages a book library. It uses Spring Data JPA and Hibernate for robust database access (MySQL). Dependency Injection ensures clean code. The user-friendly interface (HTML, CSS, Thymeleaf) lets you create, read, update, and delete books. Security (Spring Security) and features like user login and search can be added later",
    projectLink: "https://github.com/Sumanta-Sahoo/BookStoreApp.git"
  },
  {
    id: 2,
    title: "Multithreaded Web Server (Tried 1 million requests)",
    img: "https://images.pexels.com/photos/6034757/pexels-photo-6034757.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "This multithreaded web server efficiently handles multiple user requests simultaneously.Creating a Multithreaded Webserver implementing Sockets, Client Server, TCP/HTTP,Multithreading, Thread Block, Context Switching,ThreadPool Implementation & Comparison",
    projectLink: "https://github.com/Sumanta-Sahoo/Multithreaded-Webserver.git"
  },
  {
    id: 3,
    title: "Project Name 3",
    img: "https://images.pexels.com/photos/19982818/pexels-photo-19982818/free-photo-of-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "In Visual Studio Code (VSCode), duplicate shortcuts can occur if you have conflicting keybindings or if multiple extensions define the same shortcut. Here's how you can troubleshoot and resolve duplicate shortcuts in VSCode"
  }
];

const Single = ({ items }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return <section >
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={items.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{items.title}</h2>
          <p>{items.desc}</p>
          {/* <button>Visit Demo</button> */}
          <button><a href={items.projectLink} target="blank">Visit Link</a></button>
        </motion.div>
      </div>
    </div>
  </section>
};

const PortProject = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: "100",
    damping: "30"
  })
  return (
    <motion.div className="project" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((items) => (
        <Single items={items} key={items.id}></Single>
      ))}
    </motion.div>
  )
}

export default PortProject
