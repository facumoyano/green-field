import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Error = () => {
    const { t } = useTranslation();
    return (
        <Box
            backgroundColor="error"
            color="blanco"
            textAlign="center"
            p={3}
            rounded="xl"
        >
            <Text>{t("error.oblig")}</Text>
        </Box>
    );
};

export default Error;
