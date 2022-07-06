import React from "react";
import { Box, Stack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoBlanco from "../assets/logo-blanco.png";

const NavBar = () => {
    return (
        <Box
            as="nav"
            bgColor="principal"
            width="100%"
            position="fixed"
            top="0"
            zIndex="2"
        >
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                color="blanco"
                maxWidth="1200px"
                alignItems="center"
                margin="0 auto"
                py={5}
            >
                <Image
                    src={LogoBlanco}
                    alt="Logo Green Field Brokers"
                    width="80px"
                    objectFit="cover"
                />
                <Stack flexDirection="row" gap={4} alignItems="center">
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
                        <Link to="">Inicio</Link>
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
                        <Link className="link" to="">
                            Nosotros
                        </Link>
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
                        <Link to="">Servicios</Link>
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
                        <Link to="">Productos</Link>
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
                        <Link to="">Contacto</Link>
                    </Heading>
                </Stack>
            </Stack>
        </Box>
    );
};

export default NavBar;
