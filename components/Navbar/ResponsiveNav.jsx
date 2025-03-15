"use client";

import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const [navBg, setNavBg] = useState(false);

    // Open Mobile Nav Menu
    const handleNavShow = () => setShowNav(true);

    // Close Mobile Nav Menu
    const handleCloseNav = () => setShowNav(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Nav openNav={handleNavShow} navBg={navBg} />
            <MobileNav showNav={showNav} closeNav={handleCloseNav} />
        </div>
    );
};

export default ResponsiveNav;