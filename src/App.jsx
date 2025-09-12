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
                    <footer className="w-full py-6 flex justify-center items-center bg-gray-900">
            <span className="text-gray-400 text-sm">
              © 2025{" "}
                <a href="https://noaperu.fr" className="hover:underline">
                Noa
              </a>
              . Tous droits réservés.
            </span>
                    </footer>
                </>
            )}
        </>
    );
};

const ProjectPageLayout = () => (
    <>
        <ProjectDetails />
        <footer className="w-full py-6 flex justify-center items-center bg-gray-900">
      <span className="text-gray-400 text-sm">
        © 2025{" "}
          <a href="https://noaperu.fr" className="hover:underline">
          Noa
        </a>
        . Tous droits réservés.
      </span>
        </footer>
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
