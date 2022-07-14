import React from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";

const ServiceItem = ({ img, titulo, texto }) => {
    return (
        <Box cursor="grab" my={10}>
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                templateRows={{ base: "1fr 1fr", md: "1fr" }}
                gap={10}
                mx={2}
            >
                <Box
                    backgroundImage={img}
                    width="100%"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    rounded="lg"
                    height="100%"
                >
                    <Box
                        background="rgba(0, 43, 67, 0.2)"
                        width="100%"
                        height="100%"
                        rounded="lg"
                    ></Box>
                </Box>
                <Box display="flex" flexDirection="column" gap={4}>
                    <Heading as="h3" color="blanco">
                        {titulo}
                    </Heading>
                    <Text
                        color="blanco"
                        fontSize="lg"
                        lineHeight="1.8rem"
                        fontStyle="italic"
                    >
                        {texto}
                    </Text>
                    <Box id="products"></Box>
                </Box>
            </Grid>
        </Box>
    );
};

export default ServiceItem;
