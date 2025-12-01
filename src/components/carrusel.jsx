"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Carrusel() {
    const images = [
        "https://www.hdwallpapers.in/download/bmw_m5_cs_2021_6_4k_5k_hd_cars-HD.jpg",
        "https://wallpaper.forfun.com/fetch/31/31bb49f1f6f162e20356cd1fc1b2acc2.jpeg",
        "https://images.unsplash.com/photo-1541348263662-e068662d82af?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[95%] h-100 overflow-hidden rounded-xl">

            {/* SLIDER */}
            <motion.div
                className="flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {images.map((src, i) => (
                    <motion.img
                        key={i}
                        src={src}
                        className="w-full h-100 object-cover shrink-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                ))}
            </motion.div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-transparent" />
            <div className="absolute left-0 inset-0 bg-gradient-to-r from-black/100 via-black/50 to-transparent" />
            <div className="absolute inset-0 text-5xl text-white font-special flex items-center justify-start pl-6 font-bold w-126" >El nuevo estándar en autos de lujo.</div>

            {/* TEXTO ANIMADO */}
            <div className="absolute inset-0 flex items-end justify-end pb-6 pr-8 font-sansation">
                <motion.div
                    className="flex flex-col gap-46 items-end text-white"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img className="logo w-36" src="https://i.imgur.com/NQcF2KJ.png" />

                    {/* <h1 className="text-xl font-semibold sdrop-shadow-lg pb-6">
                        TU PRÓXIMO AUTO
                    </h1> */}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-banner"
                    >
                        Tú próximo auto en este botón
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
