import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ContactHeader = () => {
    return (
        <Box
            background="linear-gradient(302deg, rgba(16,47,27,1) 0%, rgba(64,156,97,1) 100%, rgba(255,255,255,1) 100%)"
            mt="100px"
        >
            <Box color="blanco" textAlign="center" pt={10}>
                <Heading fontSize="6xl" as="h2" fontWeight="400">
                    Contáctanos
                </Heading>
                <Text fontSize="xl" mt={3}>
                    Nos comunicaremos lo más pronto posible.
                </Text>
            </Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,202.7C672,213,768,203,864,170.7C960,139,1056,85,1152,64C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </Box>
    );
};

export default ContactHeader;
