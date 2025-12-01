"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`
                navbar_main w-full z-50 transition-all duration-300 
                ${scrolled ? "backdrop-blur-md shadow-lg bg-secondary/80" : ""}
            `}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center font-funnel">
                <ol className="flex gap-12 items-center text-xl">
                    <li><a className="navlink">Inicio</a></li>
                    <li><a className="navlink">Inventario</a></li>
                </ol>
                <div className="flex justify-center pl-16">
                    <img
                        src="https://i.imgur.com/NQcF2KJ.png"
                        className="w-26"
                    />
                </div>
                <ol className="flex gap-12 items-center text-xl">
                    <li><a className="navlink">Mecánica</a></li>
                    <li><a className="navlink">Sobre nosotros</a></li>
                </ol>
            </div>
        </nav>
    );
}
