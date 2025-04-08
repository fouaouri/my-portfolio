import React, { useState, useEffect } from "react";
import {Navbar, Footer, Preloader, ScrollToTop, Home, Projects, About } from './components';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";
// import Resume from './components/Resume';

function App() {
    const [load, upadateLoad] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return(
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
                <Footer />
            </div>
        </Router> 
    );

}


export default App
