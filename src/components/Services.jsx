import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import ServiceItem from "./ServiceItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/ServiceItem.webp";
import img2 from "../assets/ServiceItem2.webp";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    const { t } = useTranslation();

    return (
        <Box backgroundColor="blanco" id="services">
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
            <Box backgroundColor="principal" height="100%">
                <Box maxWidth="1200px" margin="0 auto" p={4}>
                    <Heading
                        as="h3"
                        color="blanco"
                        textAlign="center"
                        textDecoration="underline"
                        py={8}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {t("services.title")}
                    </Heading>
                    <Box
                        maxWidth="900px"
                        margin="0 auto"
                        pb={40}
                        px={{ base: 8, md: 0 }}
                    >
                        <Slider {...settings}>
                            <ServiceItem
                                img={img1}
                                titulo={t("services.subtitle2")}
                                texto={t("services.text2")}
                            />
                            <ServiceItem
                                img={img2}
                                titulo={t("services.subtitle1")}
                                texto={t("services.text1")}
                            />
                        </Slider>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Services;
