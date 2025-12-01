"use client";
import { useState } from "react";

export default function RelatedCars({ cars }) {
    const [index, setIndex] = useState(0);
    const visibleCount = 4; // cantidad visible en pantalla

    const next = () => {
        if (index < cars.length - visibleCount) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <div className="w-full mt-16 px-6 font-sansation text-black py-16">

            <h2 className="text-3xl font-bold mb-6">
                Estos vehículos también podrían interesarte
            </h2>

            <div className="relative flex items-center gap-4">

                {/* ⬅ Flecha izquierda */}
                <button
                    onClick={prev}
                    disabled={index === 0}
                    className="text-4xl px-3 opacity-60 hover:opacity-100 disabled:opacity-20"
                >
                    ❮
                </button>

                {/* CONTENEDOR DEL SLIDER */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${index * 25}%)` }}
                    // 25% = 100/4 → avanza 1 item dejando siempre 4 visibles
                    >
                        {cars.map((car, i) => (
                            <div key={i}
                                className="min-w-[25%] bg-white rounded-xl overflow-hidden shadow-[0px_0px_30px_rgba(255,200,60,0.25)]
                                hover:scale-[1.03] transition relative"
                            >
                                <img src={car.images[0]} className="w-full h-[230px] object-cover" />

                                <div className="p-3">
                                    <h3 className="text-xl font-bold">{car.price}</h3>
                                    <p className="text-sm opacity-80">{car.title} {car.model} {car.motor}cv</p>
                                    <p className="text-xs opacity-70">{car.year} | {car.km}</p>
                                </div>

                                <img src="/Mercedez.png"
                                    className="absolute bottom-3 right-3 w-7 opacity-90" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ➤ Flecha derecha */}
                <button
                    onClick={next}
                    disabled={index >= cars.length - visibleCount}
                    className="text-4xl px-3 opacity-60 hover:opacity-100 disabled:opacity-20"
                >
                    ❯
                </button>

            </div>
        </div>
    );
}
