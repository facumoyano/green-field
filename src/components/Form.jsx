import React from "react";
import {
    Box,
    Grid,
    Image,
    Input,
    Stack,
    Textarea,
    Button,
    GridItem,
} from "@chakra-ui/react";
import img from "../assets/Contact.png";
import { ImArrowRight2 } from "react-icons/im";

const Form = () => {
    return (
        <Box maxWidth="1200px" margin="0 auto" pb={20}>
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                templateRows={{ base: " 0.5fr 1fr", md: "1fr" }}
                gap={4}
                px={{ base: 4, md: 0 }}
            >
                <GridItem rounded="lg" boxShadow="xl" p={10}>
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
                        <Box display="flex" justifyContent="center">
                            <Button
                                width="40%"
                                rightIcon={<ImArrowRight2 />}
                                backgroundColor="principal"
                                color="blanco"
                                fontSize="lg"
                                borderRadius="30px"
                                py={6}
                                px={10}
                                _hover={{
                                    bgColor: "amarilloFuerte",
                                }}
                            >
                                Enviar
                            </Button>
                        </Box>
                    </Stack>
                </GridItem>
                <GridItem rowStart={{ base: "1", md: "0" }}>
                    <Image src={img} alt="Imagen de contacto" />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Form;
