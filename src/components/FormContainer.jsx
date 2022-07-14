import React from "react";
import { Box, Grid, Image, GridItem } from "@chakra-ui/react";
import img from "../assets/Contact.webp";
import { motion } from "framer-motion";

import Form from "./Form";

const FormContainer = () => {
    return (
        <Box maxWidth="1200px" margin="0 auto" pb={20}>
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 1 }}
            >
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    templateRows={{ base: " 0.5fr 1fr", md: "1fr" }}
                    gap={4}
                    px={{ base: 4, md: 0 }}
                >
                    <Form />
                    <GridItem rowStart={{ base: "1", md: "0" }}>
                        <Image src={img} alt="Imagen de contacto" />
                    </GridItem>
                </Grid>
            </motion.div>
        </Box>
    );
};

export default FormContainer;
