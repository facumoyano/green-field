import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Products from "../components/Products";
import ContactHome from "../components/ContactHome";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <Services />
            <Products />
            <ContactHome />
            <Footer />
        </>
    );
};

export default Home;
