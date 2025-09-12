import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./Pages/404";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
    return (
        <>
            <AnimatePresence mode="wait">
                {showWelcome && (
                    <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
                )}
            </AnimatePresence>

            {!showWelcome && (
                <>
                    <Navbar />
                    <AnimatedBackground />
                    <Home />
                    <About />
                    <Portofolio />
                    <Footer />
                </>
            )}
        </>
    );
};

const ProjectPageLayout = () => (
    <>
        <ProjectDetails />
        <Footer />
    </>
);

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LandingPage
                            showWelcome={showWelcome}
                            setShowWelcome={setShowWelcome}
                        />
                    }
                />
                <Route path="/project/:id" element={<ProjectPageLayout />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;