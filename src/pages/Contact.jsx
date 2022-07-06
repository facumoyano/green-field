import React from "react";
import ContactHeader from "../components/ContactHeader";
import Footer from "../components/Footer";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

const Contact = () => {
    return (
        <>
            <NavBar />
            <ContactHeader />
            <Form />
            <Footer />
        </>
    );
};

export default Contact;
