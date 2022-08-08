import React, { useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const ContactHome = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { t } = useTranslation();

    return (
        <Box backgroundColor="blanco">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ marginBottom: "-10px" }}
            >
                <path
                    fill="#002b43"
                    fillOpacity="1"
                    d="M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,202.7C672,213,768,203,864,170.7C960,139,1056,85,1152,64C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <Box
                textAlign="center"
                backgroundColor="principal"
                height="30vh"
                pt={{ base: 16, md: 0 }}
            >
                <Button
                    rightIcon={<ImArrowRight2 />}
                    backgroundColor="amarilloFuerte"
                    color="blanco"
                    fontSize="2xl"
                    borderRadius="30px"
                    py={6}
                    px={10}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    _hover={{
                        bgColor: "amarillo",
                    }}
                    _active="none"
                >
                    <Link to="/contact">{t("header.btn")}</Link>
                </Button>
            </Box>
        </Box>
    );
};

export default ContactHome;
