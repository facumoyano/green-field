import React from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import img from "../assets/ServiceItem.jpg";

const ServiceItem = () => {
    return (
        <Box cursor="grab">
            <Grid templateColumns="1fr 1fr" gap={10}>
                <Box
                    backgroundImage={img}
                    width="100%"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    rounded="lg"
                >
                    <Box
                        background="rgba(16, 47, 27, 0.3)"
                        width="100%"
                        height="100%"
                        rounded="lg"
                    ></Box>
                </Box>
                <Box display="flex" flexDirection="column" gap={4}>
                    <Heading as="h3" color="blanco">
                        Titulo
                    </Heading>
                    <Text color="blanco">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sodales accumsan leo, vitae gravida ante laoreet
                        ac. Curabitur commodo facilisis felis eu luctus. Proin
                        et efficitur augue. Sed non porttitor nibh, a ultricies
                        diam. Aliquam commodo porta venenatis. Curabitur
                        suscipit vulputate pretium.
                    </Text>
                </Box>
            </Grid>
        </Box>
    );
};

export default ServiceItem;
