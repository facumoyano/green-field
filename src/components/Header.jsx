import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Svg from "../assets/img2.svg";
import { ImArrowRight2 } from "react-icons/im";

const Header = () => {
    return (
        <div className="wrp">
            <div className="portada"></div>
            <div className="contenido">
                <div className="info">
                    <Heading as="h1">Del mundo hacia el mundo.</Heading>
                    <Link to="contact">
                        Contáctanos <ImArrowRight2 />{" "}
                    </Link>
                </div>
            </div>
            <div className="curveado">
                <Image src={Svg} />
            </div>
        </div>
    );
};

export default Header;
