import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Error = () => {
    return (
        <Box
            backgroundColor="error"
            color="blanco"
            textAlign="center"
            p={3}
            rounded="xl"
        >
            <Text>Los campos son obligatorios</Text>
        </Box>
    );
};

export default Error;
