import React from "react";
import { Box, Stack, ListItem, List, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-blanco.webp";
import { MdEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <Box backgroundColor="negro" color="blanco">
            <Stack
                maxWidth="1200px"
                margin="0 auto"
                flexDirection={{ base: "column", md: "row" }}
                gap={14}
                justifyContent="space-between"
                alignItems="center"
                py={10}
            >
                <Box>
                    <Image
                        src={logo}
                        alt="Logo Green Field Brokers"
                        width="200px"
                    />
                </Box>
                <Stack>
                    <List fontSize="md">
                        <ListItem display="flex" alignItems="center" gap={3}>
                            <MdEmail />
                            commercial@greenfieldbrokers.com
                        </ListItem>
                        <ListItem
                            mt={4}
                            display="flex"
                            alignItems="center"
                            gap={3}
                        >
                            <BiMap /> 848 Brickell Ave, Miami, FL 33131, EE. UU.
                        </ListItem>
                    </List>
                </Stack>
            </Stack>
            <Box
                textAlign="center"
                pb={4}
                pt={{ base: 4, md: 0 }}
                px={{ base: 3, md: 0 }}
            >
                <Text>{t("footer.derechos")} © Green Field Broker LLC</Text>
            </Box>
        </Box>
    );
};

export default Footer;
