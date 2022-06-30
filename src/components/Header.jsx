import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Svg from "../assets/img2.svg";
import { ImArrowRight2 } from "react-icons/im";

const Header = () => {
    return (
        <div class="wrp">
            <div class="portada"></div>
            <div class="contenido">
                <div class="info">
                    <Heading as="h1">Del mundo hacia el mundo.</Heading>
                    <Link to="contact">
                        Contáctanos <ImArrowRight2 />{" "}
                    </Link>
                </div>
            </div>
            <div class="curveado">
                <Image src={Svg} />
            </div>
        </div>
    );
};

export default Header;
