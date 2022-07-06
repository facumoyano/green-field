import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import ServiceItem from "./ServiceItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/ServiceItem.jpg";
import img2 from "../assets/ServiceItem2.jpg";

const Services = () => {
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
    return (
        <Box backgroundColor="blanco">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path
                    fill="#102F1B"
                    fillOpacity="1"
                    d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,112C480,128,549,192,617,202.7C685.7,213,754,171,823,181.3C891.4,192,960,256,1029,240C1097.1,224,1166,128,1234,96C1302.9,64,1371,96,1406,112L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
            </svg>
            <Box backgroundColor="principal" height="100%">
                <Box maxWidth="1200px" margin="0 auto">
                    <Heading
                        as="h3"
                        color="blanco"
                        textAlign="center"
                        textDecoration="underline"
                        mb={14}
                    >
                        Servicios
                    </Heading>
                    <Box maxWidth="900px" margin="0 auto" pb={40}>
                        <Slider {...settings}>
                            <ServiceItem
                                img={img1}
                                titulo="Conectando negocios"
                                texto=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sodales accumsan leo, vitae gravida ante laoreet
                        ac. Curabitur commodo facilisis felis eu luctus. Proin
                        et efficitur augue. Sed non porttitor nibh, a ultricies
                        diam. Aliquam commodo porta venenatis. Curabitur
                        suscipit vulputate pretium."
                            />
                            <ServiceItem
                                img={img2}
                                titulo="Trader y broker"
                                texto=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sodales accumsan leo, vitae gravida ante laoreet
                        ac. Curabitur commodo facilisis felis eu luctus. Proin
                        et efficitur augue. Sed non porttitor nibh, a ultricies
                        diam. Aliquam commodo porta venenatis. Curabitur
                        suscipit vulputate pretium."
                            />
                        </Slider>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Services;
