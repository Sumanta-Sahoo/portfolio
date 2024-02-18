import "./Skills.scss";
import {useRef} from "react";
import {motion, useInView} from "framer-motion";

const Skills = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin:"100px"});

    const variants={
        initial:{
            x : -500,
            y:100,
            opacity:0
        },
        animate:{
            x:0,
            y:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:1
            }
        }
    }
  return (
    <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>I prioritize fundamental principles and emphasize 
            <br /> crafting high-quality code. </p>
            <hr />
      </motion.div>
      <motion.div className="titleTextContainer" >
        <motion.div className="title">
            <img src="/people.webp" alt="" />
            <motion.h1 ><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</motion.h1>
        </motion.div>
        <motion.div className="title">
            <motion.h1><motion.b whileHover={{color:"orange"}}>Make Them </motion.b>LIVE</motion.h1>
            <button>WHAT I DO?</button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" >
        <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
            <h2>Latest Work 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed commodi possimus distinctio beatae voluptas magnam in 
                temporibus rerum omnis vitae?</p>
                <motion.button whileHover={{backgroundColor:"#111132", color:"white"}}>GO</motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
            <h2>Latest Work 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed commodi possimus distinctio beatae voluptas magnam in 
                temporibus rerum omnis vitae?</p>
                <motion.button whileHover={{backgroundColor:"#111132", color:"white"}}>GO</motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
            <h2>Latest Work 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed commodi possimus distinctio beatae voluptas magnam in 
                temporibus rerum omnis vitae?</p>
                <motion.button whileHover={{backgroundColor:"#111132", color:"white"}}>GO</motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
            <h2>Latest Work 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed commodi possimus distinctio beatae voluptas magnam in 
                temporibus rerum omnis vitae?</p>
                <motion.button whileHover={{backgroundColor:"#111132", color:"white"}}>GO</motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
