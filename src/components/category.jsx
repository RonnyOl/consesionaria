"use client"
import { motion } from "framer-motion";

export default function Categorias() {
    const categorias = [
        {
            titulo: "SEDÁN",
            desc: "Elegancia y confort en cada viaje. Descubrí el sedán ideal para vos y tu familia.",
            img: "https://www.echopark.com/-/media/project/sonic/echopark/blogs/blog-photos/what-is-a-sedan/blog_0017_hyundai-elantra-bridge-buildginbg-dt.jpg",
        },
        {
            titulo: "DEPORTIVO",
            desc: "Libertad sobre dos ruedas. Encuentra la moto que se adapta a tu estilo de vida.",
            img: "https://www.autoplusdigital.com.ar/wp-content/uploads/2023/04/autos-2.jpg",
        },
        {
            titulo: "PICK-UP",
            desc: "Potencia y versatilidad en cada camino. Encuentra la pick-up perfecta para trabajo o aventura.",
            img: "https://www.ram.com/content/dam/cross-regional/stellantis/ramtrucks/latam-rol/peru/Blog/que-es-pickup-significado/que-es-pickup-significado.jpg.img.1440.jpg",
        },
        {
            titulo: "HATCHBACK",
            desc: "Ágil, compacto y con estilo. Encontrá el hatchback perfecto para moverte con libertad.",
            img: "https://hips.hearstapps.com/hmg-prod/images/2023-lightning-lap-volkswagen-golf-gti-mu-105-1675446169.jpg?crop=0.629xw:0.630xh;0.121xw,0.199xh",
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 font-sansation">
            <Card {...categorias[0]} />
            <Card {...categorias[1]} />
            <Card {...categorias[2]} className="row-span-2 w-96 object-cover object-center" />
            <Card {...categorias[3]} className="md:col-span-2 h-96" />
        </div>
    );
}

function Card({ titulo, desc, img, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer ${className}`}
        >
            <img
                src={img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Degradado oscuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Texto */}
            <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-3xl font-league">{titulo}</h2>
                <p className=" text-sm opacity-90 max-w-xs font-manrope">{desc}</p>

                <button className="mt-4 inline-block text-sm font-semibold hover:translate-x-1 transition-transform">
                    Ver más →
                </button>
            </div>
        </motion.div>
    );
}
