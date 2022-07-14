import React, { useState } from "react";
import {
    GridItem,
    Stack,
    Input,
    Textarea,
    Button,
    Box,
    useDisclosure,
} from "@chakra-ui/react";
import { ImArrowRight2 } from "react-icons/im";
import Error from "./Error";
import Modal from "./Modal";

const Form = () => {
    const [cliente, setCliente] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
    });
    const [error, setError] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { nombre, email, telefono, mensaje } = cliente;

    const handleInputChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, email, telefono, mensaje].includes("")) {
            console.log("campo vacio");
            setError(true);
            return;
        }
        setError(false);
        setCliente({
            nombre: "",
            email: "",
            telefono: "",
            mensaje: "",
        });
        console.log(cliente);
    };

    return (
        <GridItem
            rounded="lg"
            boxShadow="xl"
            p={10}
            as="form"
            onSubmit={handleSubmit}
        >
            <Stack gap={3}>
                <Input
                    bgColor="#fafafa"
                    border="none"
                    placeholder="Nombre"
                    p={4}
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                />
                <Input
                    bgColor="#fafafa"
                    border="none"
                    placeholder="Email"
                    p={4}
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <Input
                    bgColor="#fafafa"
                    border="none"
                    placeholder="Teléfono"
                    p={4}
                    name="telefono"
                    value={telefono}
                    onChange={handleInputChange}
                />
                <Textarea
                    bgColor="#fafafa"
                    border="none"
                    placeholder="¿Qué podemos hacer por tí?"
                    rows="8"
                    p={4}
                    name="mensaje"
                    value={mensaje}
                    onChange={handleInputChange}
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
                        type="submit"
                        onClick={onOpen}
                        _hover={{
                            bgColor: "amarilloFuerte",
                        }}
                    >
                        Enviar
                    </Button>
                </Box>
                {error && <Error />}
            </Stack>
            {!error && (
                <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            )}
        </GridItem>
    );
};

export default Form;
