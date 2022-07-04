import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <Services />
        </>
    );
};

export default Home;
