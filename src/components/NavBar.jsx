import React from "react";
import { Box, Stack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoBlanco from "../assets/logo-blanco.png";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
    return (
        <Box
            as="nav"
            bgColor="principal"
            width="100%"
            position="fixed"
            top="0"
            zIndex="2"
            boxShadow="xl"
        >
            <Stack
                flexDirection="row"
                justifyContent={{ base: "center", md: "space-between" }}
                color="blanco"
                maxWidth="1200px"
                alignItems="center"
                margin="0 auto"
                py={5}
            >
                <Link to="/">
                    <Image
                        src={LogoBlanco}
                        alt="Logo Green Field Brokers"
                        width={{ base: "100px", md: "80px" }}
                        objectFit="cover"
                    />
                </Link>
                <Stack
                    flexDirection="row"
                    gap={4}
                    alignItems="center"
                    display={{ base: "none", md: "flex" }}
                >
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        mt="0.5rem"
                        _hover={{
                            borderBottom: "3px solid white",
                            paddingBottom: "10px",
                            transition: ".3s",
                        }}
                    >
                        <Link to="/">Inicio</Link>
                    </Heading>
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        _hover={{
                            borderBottom: "3px solid white",
                            paddingBottom: "10px",
                            transition: ".3s",
                        }}
                    >
                        <HashLink className="link" to="#about" smooth>
                            Nosotros
                        </HashLink>
                    </Heading>
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        _hover={{
                            borderBottom: "3px solid white",
                            paddingBottom: "10px",
                            transition: ".3s",
                        }}
                    >
                        <HashLink to="#services" smooth>
                            Servicios
                        </HashLink>
                    </Heading>
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        _hover={{
                            borderBottom: "3px solid white",
                            paddingBottom: "10px",
                            transition: ".3s",
                        }}
                    >
                        <HashLink to="#products" smooth>
                            Productos
                        </HashLink>
                    </Heading>
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        _hover={{
                            borderBottom: "3px solid white",
                            paddingBottom: "10px",
                            transition: ".3s",
                        }}
                    >
                        <Link to="/contact">Contacto</Link>
                    </Heading>
                </Stack>
            </Stack>
        </Box>
    );
};

export default NavBar;
