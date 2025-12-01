"use client";
import React, { useEffect } from "react";

export default function ImageModal({ images, selected, setSelected, onClose }) {

    const index = images.indexOf(selected);

    const prev = () => {
        const newIndex = (index - 1 + images.length) % images.length;
        setSelected(images[newIndex]);
    };

    const next = () => {
        const newIndex = (index + 1) % images.length;
        setSelected(images[newIndex]);
    };

    // Cerrar con ESC
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [index]);

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">

            {/* Botón cerrar */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-3xl hover:cursor-pointer"
            >
                ✕
            </button>

            {/* Imagen */}
            <img
                src={selected}
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg hover:cursor-pointer"
            />

            {/* Flechas */}
            <button
                onClick={prev}
                className="absolute left-10 text-white text-5xl select-none hover:cursor-pointer"
            >
                ❮
            </button>

            <button
                onClick={next}
                className="absolute right-10 text-white text-5xl select-none hover:cursor-pointer"
            >
                ❯
            </button>

            {/* Miniaturas abajo */}
            <div className="absolute bottom-8 flex gap-3">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className={`w-20 h-16 object-cover rounded-md cursor-pointer border 
                        ${selected === img ? "border-yellow-500" : "border-transparent"}`}
                        onClick={() => setSelected(img)}
                    />
                ))}
            </div>
        </div>
    );
}
