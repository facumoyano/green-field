import React from "react";
import {
    Modal as ModalChakra,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
} from "@chakra-ui/react";

const Modal = ({ isOpen, onOpen, onClose }) => {
    return (
        <ModalChakra isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
                display="flex"
                flexDirection="column"
                alignItems="center"
                width={{ base: "90%", md: "100%" }}
            >
                <ModalHeader fontSize="2xl">
                    ¡Gracias por tu interés!
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody fontSize="xl">
                    Nos comunicaremos contigo lo más pronto posible.
                </ModalBody>

                <ModalFooter>
                    <Button
                        backgroundColor="principal"
                        color="blanco"
                        mr={3}
                        onClick={onClose}
                        px={10}
                        _hover={{
                            backgroundColor: "amarilloFuerte",
                        }}
                    >
                        Volver
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ModalChakra>
    );
};

export default Modal;
