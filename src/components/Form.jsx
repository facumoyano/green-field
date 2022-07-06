import React from "react";
import { Box, Grid, Image, Input, Stack, Textarea } from "@chakra-ui/react";
import img from "../assets/Contact.png";

const Form = () => {
    return (
        <Box maxWidth="1200px" margin="0 auto" pb={20}>
            <Grid templateColumns="1fr 1fr" gap={4}>
                <Box rounded="lg" boxShadow="xl" p={10}>
                    <Stack gap={3}>
                        <Input
                            bgColor="#fafafa"
                            border="none"
                            placeholder="Nombre"
                            p={4}
                        />
                        <Input
                            bgColor="#fafafa"
                            border="none"
                            placeholder="Email"
                            p={4}
                        />
                        <Input
                            bgColor="#fafafa"
                            border="none"
                            placeholder="Teléfono"
                            p={4}
                        />
                        <Textarea
                            bgColor="#fafafa"
                            border="none"
                            placeholder="¿Qué podemos hacer por tí?"
                            rows="8"
                            p={4}
                        />
                    </Stack>
                </Box>
                <Box>
                    <Image src={img} alt="Imagen de contacto" />
                </Box>
            </Grid>
        </Box>
    );
};

export default Form;
