import React from "react";
import {
    Box,
    Stack,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoBlanco from "../assets/logo-blanco.webp";
import { HashLink } from "react-router-hash-link";
import { TbLanguage } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import esp from "../assets/spain.png";
import usa from "../assets/usa.png";

const NavBar = () => {
    const { t, i18n } = useTranslation();

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
                            borderBottom: "3px solid #fcc80d",
                            paddingBottom: "10px",
                            color: "amarilloFuerte",
                            transition: ".2s",
                        }}
                    >
                        <Link to="/">{t("navbar.inicio")}</Link>
                    </Heading>
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        _hover={{
                            borderBottom: "3px solid #fcc80d",
                            paddingBottom: "10px",
                            color: "amarilloFuerte",
                            transition: ".2s",
                        }}
                    >
                        <HashLink className="link" to="#about" smooth>
                            {t("navbar.empresa")}
                        </HashLink>
                    </Heading>
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        _hover={{
                            borderBottom: "3px solid #fcc80d",
                            paddingBottom: "10px",
                            color: "amarilloFuerte",
                            transition: ".2s",
                        }}
                    >
                        <HashLink to="#services" smooth>
                            {t("navbar.servicios")}
                        </HashLink>
                    </Heading>
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        _hover={{
                            borderBottom: "3px solid #fcc80d",
                            paddingBottom: "10px",
                            color: "amarilloFuerte",
                            transition: ".2s",
                        }}
                    >
                        <HashLink to="#products" smooth>
                            {t("navbar.productos")}
                        </HashLink>
                    </Heading>
                    <Heading
                        as="span"
                        fontSize="large"
                        fontWeight="400"
                        _hover={{
                            borderBottom: "3px solid #fcc80d",
                            paddingBottom: "10px",
                            color: "amarilloFuerte",
                            transition: ".2s",
                        }}
                    >
                        <Link to="/contact">{t("navbar.contacto")}</Link>
                    </Heading>
                    <Menu>
                        <MenuButton
                            color="white"
                            _hover={{
                                borderBottom: "3px solid #fcc80d",
                                paddingBottom: "10px",
                                color: "#fcc80d",
                                transition: ".2s",
                            }}
                        >
                            <TbLanguage
                                style={{ color: "white", fontSize: "20px" }}
                            />
                        </MenuButton>
                        <MenuList color="principal">
                            <MenuItem
                                fontWeight={600}
                                onClick={(e) => {
                                    e.preventDefault();
                                    i18n.changeLanguage("es");
                                }}
                            >
                                <Image
                                    boxSize="1.5rem"
                                    borderRadius="full"
                                    src={esp}
                                    alt="España"
                                    mr="12px"
                                />
                                <span>ESP</span>
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem
                                fontWeight={600}
                                onClick={(e) => {
                                    e.preventDefault();
                                    i18n.changeLanguage("en");
                                }}
                            >
                                <Image
                                    boxSize="1.5rem"
                                    borderRadius="full"
                                    src={usa}
                                    alt="usa"
                                    mr="12px"
                                />
                                <span>ENG</span>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Stack>
        </Box>
    );
};

export default NavBar;
