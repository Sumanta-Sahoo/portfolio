import { useState } from "react";
import "./Cursor.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Curson = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.addEventListener("mousemove", mouseMove);
        };
    }, []);

    console.log(position);

    return (
        <motion.div className="cursor"
            animate={{ x: position.x + 10, y: position.y + 10 }}
        > </motion.div>
    )
}

export default Curson
