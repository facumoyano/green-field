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
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Form = () => {
    const [cliente, setCliente] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
    });

    const { t } = useTranslation();

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
        emailjs
            .sendForm(
                "service_an2ltjq",
                "template_kjk6w3d",
                e.target,
                "80cC6DSgCPhBJ81cW"
            )
            .then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setError(false);
        setCliente({
            nombre: "",
            email: "",
            telefono: "",
            mensaje: "",
        });
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
                    placeholder={t("form.nombre")}
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
                    placeholder={t("form.telefono")}
                    p={4}
                    name="telefono"
                    value={telefono}
                    onChange={handleInputChange}
                />
                <Textarea
                    bgColor="#fafafa"
                    border="none"
                    placeholder={t("form.textarea")}
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
                        {t("form.btn")}
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
