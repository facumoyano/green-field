import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Products = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
        >
            <Box maxWidth="1200px" margin="0 auto">
                <Heading
                    textAlign="center"
                    as="h3"
                    color="principal"
                    textDecoration="underline"
                    textShadow="0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                    my={20}
                >
                    {t("products.title")}
                </Heading>
                <section className="cards" style={{ marginBottom: 30 }}>
                    <article className="card card--1">
                        <div className="card__info-hover"></div>
                        <div className="card__img"></div>

                        <div class="card__img--hover"></div>

                        <div className="card__info">
                            <Heading
                                fontSize="lg"
                                as="h3"
                                className="card__category"
                                textTransform="uppercase"
                            >
                                {" "}
                                {t("products.mani")}
                            </Heading>
                            <Text className="card__title">
                                {t("products.text1")}
                            </Text>
                        </div>
                    </article>

                    <article className="card card--2">
                        <div className="card__info-hover">
                            <div className="card__clock-info"></div>
                        </div>
                        <div className="card__img"></div>

                        <div className="card__img--hover"></div>

                        <div className="card__info">
                            <Heading
                                fontSize="lg"
                                as="h3"
                                className="card__category"
                                textTransform="uppercase"
                            >
                                {" "}
                                {t("products.legumbres")}
                            </Heading>
                            <Text className="card__title">
                                {t("products.text2")}
                            </Text>
                        </div>
                    </article>
                    <article className="card card--3">
                        <div className="card__info-hover">
                            <div className="card__clock-info"></div>
                        </div>
                        <div className="card__img"></div>

                        <div className="card__img--hover"></div>

                        <div className="card__info">
                            <Heading
                                fontSize="lg"
                                as="h3"
                                className="card__category"
                                textTransform="uppercase"
                            >
                                {t("products.forrajes")}
                            </Heading>
                            {/* <h3 className="card__title">Discover the sea</h3> */}
                        </div>
                    </article>
                    <article className="card card--4">
                        <div className="card__info-hover">
                            <div className="card__clock-info"></div>
                        </div>
                        <div className="card__img"></div>

                        <div className="card__img--hover"></div>

                        <div className="card__info">
                            <Heading
                                fontSize="lg"
                                as="h3"
                                className="card__category"
                                textTransform="uppercase"
                            >
                                {t("products.harinas")}
                            </Heading>
                            <Text className="card__title">
                                {t("products.text3")}
                            </Text>
                        </div>
                    </article>
                </section>
            </Box>
        </motion.div>
    );
};

export default Products;
