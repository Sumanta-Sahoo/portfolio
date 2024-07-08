import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
        >Sumant Dev</motion.span>
        <motion.div className="social"

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}>

          <a href="https://linkedin.com/in/sumanta-s14" target="blank"><img src="/linkedin.png" alt="linkedin Social Link" /></a>
          <a href="https://github.com/Sumanta-Sahoo" target="blank"><img src="/github.png" alt="github Social Link" /></a>
          <a href="https://dribbble.com/Sumant_S15" target="blank"><img src="/dribbble.png" alt="dribbble Social Link" /></a>
          <a href="https://www.instagram.com/success_saga___/?igsh=ZWQ3OGFuOWF4aDZl" target="blank"><img src="/instagram.png" alt="Dribble Social Link" /></a>
        </motion.div>
        <motion.div className="resumeButton"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}>
          <motion.button>
            <a href="https://drive.google.com/file/d/1m3-9MBcLhFLetsXXJGxQWOD-Jkj2nH6c/view?usp=sharing" target="blank">View Resume</a>
          </motion.button>
        </motion.div>
      </div>

    </div>
  )
}

export default Navbar
