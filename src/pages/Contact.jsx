import React from "react";
import ContactHeader from "../components/ContactHeader";
import Footer from "../components/Footer";
import FormContainer from "../components/FormContainer";

import NavBar from "../components/NavBar";

const Contact = () => {
    return (
        <>
            <NavBar />
            <ContactHeader />
            <FormContainer />
            <Footer />
        </>
    );
};

export default Contact;
