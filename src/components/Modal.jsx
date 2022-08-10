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
import { useTranslation } from "react-i18next";

const Modal = ({ isOpen, onOpen, onClose }) => {
    const { t } = useTranslation();

    return (
        <ModalChakra isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
                display="flex"
                flexDirection="column"
                alignItems="center"
                width={{ base: "90%", md: "100%" }}
            >
                <ModalHeader fontSize="2xl">{t("modal.title")}</ModalHeader>
                <ModalCloseButton />
                <ModalBody fontSize="xl">{t("modal.text")}</ModalBody>

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
                        {t("modal.btn")}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ModalChakra>
    );
};

export default Modal;
