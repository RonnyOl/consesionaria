"use client";
import React, { useState } from "react";
import ImageModal from "./imageModal";

export default function ImageGallery({ images }) {
    const [selected, setSelected] = useState(images[0]);
    const [openModal, setOpenModal] = useState(false);

    const maxToShow = 5;
    const extra = images.length - maxToShow;

    // Mostrar solo 5 miniaturas
    const visibleImages = images.slice(0, maxToShow);

    return (
        <>
            <div className="flex gap-4">

                {/* Thumbnails */}
                <div className="flex flex-col gap-3">

                    {visibleImages.map((img, i) => {

                        // Si es la última miniatura y hay más imágenes → botón +X
                        if (i === maxToShow - 1 && images.length > maxToShow) {
                            return (
                                <div
                                    key={i}
                                    onClick={() => setOpenModal(true)}
                                    className="w-24 h-20 rounded-lg bg-black/60 text-white flex items-center justify-center cursor-pointer text-xl font-semibold"
                                >
                                    +{extra}
                                </div>
                            );
                        }

                        // Miniaturas normales
                        return (
                            <img
                                key={i}
                                src={img}
                                className={`w-24 h-20 object-cover cursor-pointer rounded-lg border
                                ${selected === img ? "border-yellow-500" : "border-transparent"}`}
                                onClick={() => setSelected(img)}
                            />
                        );
                    })}

                </div>

                {/* Imagen principal */}
                <div>
                    <img
                        src={selected}
                        onClick={() => setOpenModal(true)}
                        className="w-[40rem] h-[30rem] object-cover object-center rounded-xl shadow-lg cursor-pointer"
                    />
                </div>
            </div>

            {/* Modal con slider */}
            {openModal && (
                <ImageModal
                    images={images}
                    selected={selected}
                    setSelected={setSelected}
                    onClose={() => setOpenModal(false)}
                />
            )}
        </>
    );
}
