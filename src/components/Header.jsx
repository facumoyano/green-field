import React from "react";
import { Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Svg from "../assets/img2.svg";
import { ImArrowRight2 } from "react-icons/im";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className="wrp">
            <div className="portada"></div>
            <div className="contenido">
                <div className="info">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <Heading as="h1">{t("header.title")}</Heading>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link to="contact">
                                {t("header.btn")} <ImArrowRight2 />{" "}
                            </Link>
                        </motion.div>
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
