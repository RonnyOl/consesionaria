"use client"
import Carrusel from "../components/carrusel";
import LogoSlider from "../components/logoSlider";
import Categorias from "../components/category";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="font-sansation main-section">

      {/* HERO */}
      <div className="w-full flex items-center justify-center pt-8">
        <Carrusel />
      </div>

      <LogoSlider />

      {/* CATEGORÍAS */}
      <section className="flex items-center flex-col pt-20">
        <h2 className="text-4xl  tracking-tight text-center mb-6 font-special">
          Mirá nuestros tipos
        </h2>
        <h4 className="text-xl pb-3">Elegancia, potencia o versatilidad. Elegí tu camino.</h4>
        <Categorias />
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="w-full py-24 px-6 bg-[#f8f7f3] mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* MOCKUP */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              className="w-[40rem] max-w-full drop-shadow-xl rounded-2xl"
              src={"/mockup.png"}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold">¿Todavía no nos seguís?</h1>

            <p className="text-xl md:text-2xl leading-relaxed max-w-xl">
              Unite a nuestra comunidad en Instagram y no te pierdas ninguna de nuestras
              novedades, lanzamientos exclusivos y autos de todas las gamas.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ig px-8 py-4 text-lg mt-4"
            >
              Seguir en Instagram
            </motion.button>
          </motion.div>
        </div>
      </section>
      <div className="flex justify-center py-36">
        <div className="relative w-[95%] h-[40rem] bg-banner bg-cover bg-center bg-no-repeat items-center flex justify-center rounded-2xl rounded-4xl ">
          <div className="absolute inset-0 bg-black/70  backdrop-blur-xs rounded-4xl" />
          <div className="flex flex-col absolute items-center gap-3  ">
            <h1 className=" font-special text-7xl text-white"> CONSIGNÁ TU AUTO CON NOSOTROS </h1>
            <p className=" text-center font-special text-xl w-[55%] text-white">Vendé tu vehículo de forma rápida, segura y al mejor precio, con la confianza y respaldo de nuestro equipo. </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" text-white! border-white! hover:border-black! btn-ig px-8 py-4 text-lg mt-4 "
            >
              Consigná tu auto
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
