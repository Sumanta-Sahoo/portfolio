import Sidebar from "../sidebar/SIdebar";
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

          <a href="https://www.linkedin.com/in/sumanta-s15/" target="blank"><img src="/linkedin.png" alt="linkedin Social Link" /></a>
          <a href="https://github.com/Sumanta-Sahoo" target="blank"><img src="/github.png" alt="github Social Link" /></a>
          <a href="https://dribbble.com/Sumant_S15" target="blank"><img src="/dribbble.png" alt="dribbble Social Link" /></a>
          <a href="#" target="blank"><img src="/instagram.png" alt="Dribble Social Link" /></a>
        </motion.div>
        <motion.div className="resumeButton"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}>
          <motion.button>
            <a href="#driveResumeLink">View Resume</a>
          </motion.button>
        </motion.div>
      </div>

    </div>
  )
}

export default Navbar
