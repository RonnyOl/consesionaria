"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FiltroAutos() {

    const [precio, setPrecio] = useState([0, 100000]);

    const [openMarca, setOpenMarca] = useState(false);
    const [openModelo, setOpenModelo] = useState(false);
    const [openAno, setOpenAno] = useState(false);

    const marcas = [
        "Todos", "Alfa Romeo", "Aston Martin", "Audi", "BMW", "Chevrolet",
        "Fiat", "Ford", "Honda", "Jaguar", "Jeep", "Kia", "Mercedes-Benz",
        "Mini", "RAM", "Renault", "Toyota", "Volkswagen"
    ];

    const modelos = ["Todos", "Hilux", "Ranger", "Civic", "A3", "Corolla"];
    const anos = ["Todos", "2025", "2024", "2023", "2022", "2021"];

    return (
        <aside className="
            w-86 min-h-96 p-3 flex flex-col gap-6 text-black
            border border-yellow-500/40 rounded-xl shadow-lg
             font-sansation bg-white
        ">

            {/* BUSCADOR ------------------------- */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className=" w-full px-4 py-3 pl-10 rounded-xl border border-yellow-500/30 focus:ring-2 focus:ring-yellow-500 outline-none placeholder-gray/60"
                />
                <span className="absolute left-3 top-3 text-yellow-400 opacity-80"></span>
            </div>

            {/* DROPDOWN MARCA -------------------------------- */}
            <div>
                <button
                    onClick={() => setOpenMarca(!openMarca)}
                    className="border-[var(--main)] border-b-1 flex justify-between items-center w-full px-3 py-2 rounded-md bg-white/10 hover:bg-yellow-500/20 transition font-semibold"
                >
                    Marca
                    {openMarca ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openMarca && (
                    <div className="mt-2 flex flex-col max-h-40 overflow-y-auto min-h-66 gap-1 pr-1">
                        {marcas.map(m => (
                            <button key={m} className="px-3 py-2 text-left rounded-md bg-white/5 hover:bg-yellow-500/20 transition">
                                {m}
                            </button>
                        ))}
                    </div>
                )}
            </div>


            {/* DROPDOWN MODELO -------------------------------- */}
            <div>
                <button
                    onClick={() => setOpenModelo(!openModelo)}
                    className="border-[var(--main)] border-b-1 flex justify-between items-center w-full px-3 py-2 rounded-md bg-white/10 hover:bg-yellow-500/20 transition font-semibold"
                >
                    Modelo
                    {openModelo ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openModelo && (
                    <div className="mt-2 flex flex-col max-h-32 overflow-y-auto min-h-66 gap-1 pr-1">
                        {modelos.map(md => (
                            <button key={md} className="px-3 py-2 rounded-md text-left bg-white/5 hover:bg-yellow-500/20">
                                {md}
                            </button>
                        ))}
                    </div>
                )}
            </div>


            {/* DROPDOWN AÑO -------------------------------- */}
            <div>
                <button
                    onClick={() => setOpenAno(!openAno)}
                    className="border-[var(--main)] border-b-1 flex justify-between items-center w-full px-3 py-2 rounded-md bg-white/10 hover:bg-yellow-500/20 transition font-semibold"
                >
                    Año
                    {openAno ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openAno && (
                    <div className="mt-2 flex flex-col max-h-32 overflow-y-auto gap-1 pr-1">
                        {anos.map(a => (
                            <button key={a} className="px-3 py-2 rounded-md text-left bg-white/5 hover:bg-yellow-500/20">
                                {a}
                            </button>
                        ))}
                    </div>
                )}
            </div>


            {/* RANGO PRECIO -------------------------------- */}
            <div className="mt-4">
                <h3 className="font-semibold text-black mb-3">Rango de Precio</h3>

                {/* Contenedor visual del slider dual */}
                <div className="relative h-2 bg-black/30 rounded-full">

                    {/* Barra amarilla entre min y max */}
                    <div
                        className="absolute h-2 bg-(--main) opacity-500 rounded-full"
                        style={{
                            left: `${((precio[0] - 0) / (100000 - 0)) * 100}%`,
                            right: `${100 - ((precio[1] - 0) / (100000 - 0)) * 100}%`
                        }}
                    />

                    {/* Min */}
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={precio[0]}
                        onChange={e => {
                            const v = Number(e.target.value);
                            if (v < precio[1]) setPrecio([v, precio[1]]);
                        }}
                        className="slider-range"
                    />

                    {/* Max */}
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={precio[1]}
                        onChange={e => {
                            const v = Number(e.target.value);
                            if (v > precio[0]) setPrecio([precio[0], v]);
                        }}
                        className="slider-range"
                    />
                </div>

                <div className="flex justify-between text-sm font-bold mt-3">
                    <span>${precio[0]}</span>
                    <span>${precio[1]}</span>
                </div>
            </div>


            <div>
                <h3 className="font-bold mb-1">Kilometraje</h3>
                <select
                    className="border p-2 w-full rounded-lg"
                    onChange={e => onChange({ marca: e.target.value })}
                >
                    <option value="">Todas</option>
                    <option>0km</option>
                    <option>Hasta 5000km</option>
                    <option>Hasta 25000km</option>
                    <option>Hasta 50000km</option>
                    <option>Hasta 75000km</option>
                </select>
            </div>
        </aside>
    );
}
