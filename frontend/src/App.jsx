import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


export default function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
