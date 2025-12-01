"use client";

import { motion } from "framer-motion";

export default function LogoSlider() {
    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1024px-BMW.svg.png",
        "nissan.svg",
        "volkswagen.png",
        "audi.png",
        "Toyota.png",
        "Mercedez.png",
    ];

    const all = [...logos, ...logos];

    return (
        <motion.div
            className="w-full overflow-hidden py-10 W-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="relative flex overflow-hidden">
                <motion.div
                    className="whitespace-nowrap flex animate-marquee"
                >
                    {all.map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            className="h-20 w-auto mx-20 W-16"
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
