import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Disable scroll
        document.body.classList.add("noscroll");
        const timer = setTimeout(() => {
            setLoading(false);
            document.body.classList.remove("noscroll");
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 1. Loading muncul hanya saat loading === true */}
            {loading && <Loading />}

            {/* 2. Konten dibungkus agar bisa opacity 0 → 100 */}
            <div
                className={`transition-opacity duration-700 ${
                    loading ? "opacity-0" : "opacity-100"
                }`}
            >
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
