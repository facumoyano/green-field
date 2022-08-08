import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactHeader = () => {
    const { t } = useTranslation();
    return (
        <Box
            background="linear-gradient(180deg, rgba(0,43,67,1) 0%, rgba(18,115,170,1) 100%, rgba(255,255,255,1) 100%)"
            mt="100px"
        >
            <Box color="blanco" textAlign="center" pt={10}>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 1 }}
                    animate={{ scale: 1, opacity: 1 }}
                    translate={{ x: 100 }}
                >
                    <Heading
                        fontSize={{ base: "5xl", md: "6xl" }}
                        as="h2"
                        fontWeight="400"
                    >
                        {t("header.btn")}
                    </Heading>
                    <Text fontSize="xl" mt={3}>
                        {t("header.subtitle")}
                    </Text>
                </motion.div>
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
