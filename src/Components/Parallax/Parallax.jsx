import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({ type }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start", "end start"],
    })

    const yBG = useTransform(scrollYProgress, [0,1], ["0%", "240%"]);
    const yBGPlanet = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

    return (
        <div className="parallax"
            ref={ref}
            style={{
                background: type === "skills"
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505064)"
            }}
        >
            <motion.h1 style={{y : yBG}}>{type === "skills" ? "What I Do?" : "What I Did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{x : yBG}} className="stars"></motion.div>
            <motion.div style={{y : yBGPlanet,
                 backgroundImage:`url(${type==="skills" ? "planets.png" : "sun.png"})`}} 
                 className="planets"></motion.div>
        </div>
    )
}

export default Parallax
