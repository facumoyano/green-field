import { Heading, Box, Stack, Text, Grid } from "@chakra-ui/react";
import React from "react";
import video from "../assets/video.mp4";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    return (
        <Box my={20}>
            <Box maxWidth="1200px" margin="0 auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={10}
                        justifyContent="center"
                        alignItems="center"
                        px={8}
                    >
                        <Box>
                            <video
                                muted
                                loop
                                autoPlay
                                width="100%"
                                height="100%"
                            >
                                <source src={video} type="video/mp4" />
                                <source src={video} type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </Box>
                        <Stack flexDirection="column" fontWeight="bold" gap={1}>
                            <Heading
                                as="h3"
                                color="principal"
                                textAlign="center"
                                textDecoration="underline"
                                textShadow="0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                                pb={4}
                            >
                                {t("about.title")}
                            </Heading>
                            <Text color="principal" fontStyle="italic">
                                {t("about.text1")}
                            </Text>
                            <Text color="principal" fontStyle="italic">
                                {t("about.text2")}
                            </Text>
                            <Text color="principal" fontStyle="italic">
                                {t("about.text3")}
                            </Text>
                            <Text color="principal" fontStyle="italic">
                                {t("about.text4")}
                            </Text>
                            <Text color="principal" fontStyle="italic">
                                {t("about.text5")}
                            </Text>
                        </Stack>
                    </Grid>
                </motion.div>
            </Box>
        </Box>
    );
};

export default About;
