import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Products = () => {
    return (
        <Box maxWidth="1200px" margin="0 auto">
            <Heading
                textAlign="center"
                as="h3"
                color="principal"
                textDecoration="underline"
                textShadow="0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                my={8}
            >
                Productos
            </Heading>
            <section className="cards">
                <article className="card card--1">
                    <div className="card__info-hover"></div>
                    <div className="card__img"></div>

                    <div class="card__img--hover"></div>

                    <div className="card__info">
                        <Heading
                            fontSize="lg"
                            as="h3"
                            className="card__category"
                        >
                            {" "}
                            Maní
                        </Heading>
                        <Text className="card__title">
                            Runner, Crudo c/ piel, Blancheado, Tostado, Birfood.
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
                        >
                            {" "}
                            Legumbres
                        </Heading>
                        <Text className="card__title">
                            Lentejas, Porotos, Garbanzos, Maíz pisingallo, Maíz
                            flint, arvejas.
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
                        >
                            Forrajes
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
                        >
                            Harinas
                        </Heading>
                        <Text className="card__title">
                            Maní, Legumbres, Legumbres fortificados.
                        </Text>
                    </div>
                </article>
            </section>
        </Box>
    );
};

export default Products;
