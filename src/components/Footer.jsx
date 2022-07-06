import React from "react";
import { Box, Stack, ListItem, List, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-blanco.png";
import { MdEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <Box backgroundColor="negro" color="blanco">
            <Stack
                maxWidth="1200px"
                margin="0 auto"
                flexDirection="row"
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
                        <ListItem
                            mt={4}
                            display="flex"
                            alignItems="center"
                            gap={3}
                        >
                            <BsFillTelephoneFill /> +12723844278
                        </ListItem>
                    </List>
                </Stack>
            </Stack>
            <Box textAlign="center" pb={4}>
                <Text>
                    Todos los derechos reservados © Green Field Broker LLC
                </Text>
            </Box>
        </Box>
    );
};

export default Footer;
