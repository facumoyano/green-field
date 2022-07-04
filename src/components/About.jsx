import { Heading, Box, Stack, Text, Grid } from "@chakra-ui/react";
import React from "react";
import video from "../assets/video.mp4";

const About = () => {
    return (
        <Box mt={10}>
            <Box maxWidth="1200px" margin="0 auto">
                <Grid
                    templateColumns="1fr 1fr"
                    gap={10}
                    justifyContent="center"
                >
                    <Box>
                        <video muted loop autoPlay width="100%" height="100%">
                            <source src={video} type="video/mp4" />
                            <source src={video} type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                    <Stack flexDirection="column" fontWeight="bold" gap={4}>
                        <Heading
                            as="h4"
                            color="principal"
                            textAlign="center"
                            textDecoration="underline"
                            textShadow="0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                        >
                            Sobre nosotros
                        </Heading>
                        <Text color="principal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam sodales accumsan leo, vitae gravida ante
                            laoreet ac.
                        </Text>
                        <Text color="principal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam sodales accumsan leo, vitae gravida ante
                            laoreet ac.
                        </Text>
                        <Text color="principal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam sodales accumsan leo, vitae gravida ante
                            laoreet ac.
                        </Text>
                        <Text color="principal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam sodales accumsan leo, vitae gravida ante
                            laoreet ac.
                        </Text>
                    </Stack>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;
