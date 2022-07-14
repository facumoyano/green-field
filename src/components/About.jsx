import { Heading, Box, Stack, Text, Grid } from "@chakra-ui/react";
import React from "react";
import video from "../assets/video.mp4";
import { motion } from "framer-motion";

const About = () => {
    return (
        <Box my={20}>
            <Box maxWidth="1200px" margin="0 auto">
                <motion.div
                    whileInView={{
                        y: [100, 50, 0],
                        opacity: [0, 0, 1],
                    }}
                    transition={{ duration: 0.5 }}
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
                                Sobre nosotros
                            </Heading>
                            <Text color="principal" fontStyle="italic">
                                Somos una empresa especializada en comercio
                                exterior que se destaca por su eficacia,
                                operatividad, calidad y servicio. Green Field
                                fue fundada con un entendimiento de la necesidad
                                de conectar negocios a través de la comprensión
                                de los productos e ingredientes
                                agroalimentarios.
                            </Text>
                            <Text color="principal" fontStyle="italic">
                                Trabajamos con estrictos controles en origen de
                                nuestros clientes con un importante foco en
                                calidad y cumplimiento de las especificaciones
                                acordadas entre las partes.
                            </Text>
                            <Text color="principal" fontStyle="italic">
                                Nuestro esfuerzo se focaliza en generar y
                                mantener relaciones sólidas con nuestra red de
                                clientes.
                            </Text>
                            <Text color="principal" fontStyle="italic">
                                Nuestra experiencia en el mercado internacional
                                de agro alimentos y logística nos permite poder
                                acompañar el proceso de comercio exterior de
                                manera transversal en lo que respecta a
                                exportación e importación.
                            </Text>
                            <Text color="principal" fontStyle="italic">
                                Hacemos que su experiencia en comercio exterior
                                sea exitosa
                            </Text>
                        </Stack>
                    </Grid>
                </motion.div>
            </Box>
        </Box>
    );
};

export default About;
