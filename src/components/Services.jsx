import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import ServiceItem from "./ServiceItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/ServiceItem.webp";
import img2 from "../assets/ServiceItem2.webp";
import { motion } from "framer-motion";

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
        <Box backgroundColor="blanco" id="services">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 300"
                style={{ margin: "-10px" }}
            >
                <path
                    fill="#002b43"
                    fillOpacity="1"
                    d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,112C480,128,549,192,617,202.7C685.7,213,754,171,823,181.3C891.4,192,960,256,1029,240C1097.1,224,1166,128,1234,96C1302.9,64,1371,96,1406,112L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
            </svg>
            <Box backgroundColor="principal" height="100%">
                <Box maxWidth="1200px" margin="0 auto">
                    <motion.div
                        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Heading
                            as="h3"
                            color="blanco"
                            textAlign="center"
                            textDecoration="underline"
                            py={14}
                        >
                            Servicios
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
                                    titulo="Conectando negocios"
                                    texto="Comercio internacional de productos agroalimentarios con sede en Estados unidos de Am??rica conectando al mundo. Construimos relaciones s??lidas y sustentables en el tiempo con nuestra red de clientes. Hacemos posible el desarrollo de internacionalizaci??n. "
                                />
                                <ServiceItem
                                    img={img2}
                                    titulo="Trader y broker"
                                    texto=" Ofrecemos un servicio ajustado a las necesidades de nuestros clientes, tanto del exportador como del importador entendiendo su proceso productivo y de compra o venta."
                                />
                            </Slider>
                        </Box>
                    </motion.div>
                </Box>
            </Box>
        </Box>
    );
};

export default Services;
