import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollToTop from "./helpers/scrollToTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <NavBar />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
