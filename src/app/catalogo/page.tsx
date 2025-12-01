"use client";
import { useState } from "react";
import Card from "../../components/card";
import { motion } from "framer-motion";
import FiltroAutos from "../../components/Filtros";
export default function Home() {
  const autos = [
    {
      id: 0,
      titulo: "Toyota Hilux 2019",
      km: "50.000",
      precio: "3.500.000",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 1,
      titulo: "Toyota Hilux 2019",
      km: "50.000",
      precio: "3.500.000",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 2,
      titulo: "Toyota Hilux 2019",
      km: "50.000",
      precio: "3.500.000",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 3,
      titulo: "Toyota Hilux 2019",
      km: "50.000",
      precio: "3.500.000",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 4,
      titulo: "Toyota Hilux 2019",
      km: "50.000",
      precio: "3.500.000",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 5,
      titulo: "Toyota Hilux 2019",
      km: "50.000",
      precio: "3.500.000",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 6,
      titulo: "Toyota Hilux 2019",
      km: "50.000",
      precio: "3.500.000",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
    },
    {
      id: 7,
      titulo: "Toyota Hilux 2019",
      km: "50.000",
      precio: "3.500.000",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("Sedán");

  return (
    <>
      {/* ===========================
          🔥 PANEL DE FILTROS PREMIUM
      ============================ */}
      <div
        className="
    main-section
    bg-bottom
    w-full
    relative
    bg-white/100 
    backdrop-blur-xl 
    shadow-[0_4px_25px_rgba(0,0,0,0.15)]
    py-6 
    px-10 
    flex
    flex-col
    gap-6
    justify-center 
    items-center 
    rounded-b-3xl
    font-funnel
    border-b-2
    border-[var(--main)]
    overflow-hidden
  "
      >
        <div className="absolute inset-0 backdrop-blur-xs bg-linear-to-t" />
        {/* LATERAL GLOW */}


        <div className="flex">
          {["Pick-Up", "SUV", "Hatchback", "Motos", "Coupé", "Sedán", "Marítimo"].map(
            (cat) => (
              <button
                key={cat}
                className={`
          px-4 
          py-2 
          font-medium
          transition-all
          duration-300
          relative
          border-y-2
          border-y-[var(--main)]
          font-manrope
          ${selectedCategory === cat
                    ? "border-[var(--main)] text-[var(--main)] bg-[var(--secondary)] shadow-[0_0_10px_rgba(212,175,55,0.7)] animate-pulse"
                    : "border-transparent text-gray-600"
                  }
          hover:border-[var(--main)] 
          hover:text-[var(--main)] 
          hover:shadow-[0_0_12px_rgba(212,175,55,0.5)]
          hover:animate-pulse
        `}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            )
          )}
        </div>


      </div>

      {/* ===========================
          🏎️ GRID DE AUTOS
      ============================ */}
      <div className="
      main-section
      bg-top
        w-full 
        min-h-screen 
        flex
        py-12
       lg:pl-6  
      ">
        {/* Marca */}
        <FiltroAutos />

        <div className="flex flex-row flex-wrap justify-center items-start w-full gap-10">

          {autos.map((auto) => (
            <motion.div
              key={auto.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card {...auto} />
            </motion.div>
          ))}
        </div>

      </div>

      {/* ===========================
          🔢 PAGINACIÓN PREMIUM
      ============================ */}
      <div className="flex items-center justify-center w-full py-10">
        <div className="flex items-center justify-between w-full max-w-96 text-gray-600 font-medium">

          {/* Prev */}
          <button
            type="button"
            aria-label="prev"
            className="rounded-full bg-white/80 p-1 shadow hover:bg-white transition"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z"
                fill="#6b7280"
                stroke="#6b7280"
                strokeWidth=".078"
              />
            </svg>
          </button>

          {/* Números */}
          <div className="flex items-center gap-2 text-sm font-medium font-funnel">
            <button className="h-10 w-10 flex items-center justify-center">1</button>
            <button className="h-10 w-10 flex items-center justify-center">2</button>
            <button className="h-10 w-10 flex items-center justify-center text-[var(--main)] border border-[var(--main)] rounded-full">
              3
            </button>
            <button className="h-10 w-10 flex items-center justify-center">4</button>
            <button className="h-10 w-10 flex items-center justify-center">5</button>
          </div>

          {/* Next */}
          <button
            type="button"
            aria-label="next"
            className="rounded-full bg-white/80 p-1 shadow hover:bg-white transition"
          >
            <svg
              className="rotate-180"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z"
                fill="#6b7280"
                stroke="#6b7280"
                strokeWidth=".078"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
