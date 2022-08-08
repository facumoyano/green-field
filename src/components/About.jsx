import { Heading, Box, Stack, Text, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import video from "../assets/video.mp4";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { t } = useTranslation();

    return (
        <Box my={20} data-aos="fade-up" data-aos-duration="1000">
            <Box maxWidth="1200px" margin="0 auto">
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={10}
                    justifyContent="center"
                    alignItems="center"
                    px={8}
                >
                    <Box>
                        <video muted loop autoPlay width="100%" height="100%">
                            <source src={video} type="video/mp4" />
                            <source src={video} type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                    <Stack
                        flexDirection="column"
                        fontWeight="bold"
                        gap={1}
                        data-aos="fade-up"
                    >
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
            </Box>
        </Box>
    );
};

export default About;
