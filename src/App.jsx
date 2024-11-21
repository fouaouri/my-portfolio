// import React from 'react'
import styles from './style';
import React, { useState, useEffect } from "react";
import {Navbar, Footer, Preloader, ScrollToTop, Home, Projects, About, Resume } from './components';
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
                    {/* <Route path="/resume" element={<Resume />} /> */}
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );

}
// const App = () =>  (
//     <div className="bg-primary w-full overflow-hidden" style={{ backgroundImage: "url('../assets/home-bg.jpeg')" }}>
//         <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//             <div className={`${styles.boxWidth}`}>
//                 <Navbar />
//             </div>

//         </div>

//         <div className={`bg-primary ${styles.flexStart}`} style={{ backgroundImage: "url('../assets/home-bg.jpeg')" }}>
//             <div className={`${styles.boxWidth}`}>
//               <Hero />
//             </div>
//         </div>

//         <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} style={{ backgroundImage: "url('../assets/home-bg.jpeg')" }}>
//             <div className={`${styles.boxWidth}`}>
//                 <Stats />
//                 <Business />
//                 <Billing />
//                 <CardDeal />
//                 <Testimonials />
//                 <Clients />
//                 <CTA />
//                 <Footer />
//             </div>
//         </div>
//     </div>
// );
// style={{ backgroundImage: `url(${homeBg})` }}

export default App
