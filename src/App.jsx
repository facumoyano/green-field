import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
