import React from "react";
import { Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Svg from "../assets/img2.svg";
import { ImArrowRight2 } from "react-icons/im";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="wrp">
            <div className="portada"></div>
            <div className="contenido">
                <div className="info">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 1 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <Heading as="h1">Del mundo hacia el mundo.</Heading>
                        <Link to="contact">
                            Contáctanos <ImArrowRight2 />{" "}
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div className="curveado" id="about">
                <Image src={Svg} />
            </div>
        </div>
    );
};

export default Header;
