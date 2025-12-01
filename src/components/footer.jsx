"use client";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#f0eee8] text-gray-900 py-16 px-6 font-sansation border-t border-black/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

                {/* IZQUIERDA */}
                <div>
                    <img className="logo w-32" src="https://i.imgur.com/NQcF2KJ.png" />
                    <p className="mt-4 text-base leading-relaxed">
                        Concesionario líder en vehículos de lujo, ofreciendo atención
                        personalizada y un servicio premium sin vueltas.
                    </p>
                </div>

                {/* MENÚ */}
                <div>
                    <h3 className="font-semibold text-xl mb-4">Menú</h3>
                    <ul className="space-y-2 text-lg">
                        <li><a href="/" className="hover:text-black/60 transition">Inicio</a></li>
                        <li><a href="/catalogo" className="hover:text-black/60 transition">Catálogo</a></li>
                        <li><a href="/nosotros" className="hover:text-black/60 transition">Sobre Nosotros</a></li>
                        <li><a href="/vender" className="hover:text-black/60 transition">Quiero vender mi auto</a></li>
                    </ul>
                </div>

                {/* REDES */}
                <div className="md:text-right">
                    <h3 className="font-semibold text-xl mb-4">Síganos</h3>
                    <div className="flex md:justify-end gap-4">
                        <a
                            href="#"
                            className="p-3 rounded-full border border-gray-600 hover:border-black 
                         transition bg-white hover:bg-black hover:text-white"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full border border-gray-600 hover:border-black 
                         transition bg-white hover:bg-black hover:text-white"
                        >
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between text-sm">
                <p>© 2025 Delta automóviles. Todos los derechos reservados.</p>
                <p className="mt-2 md:mt-0">
                    Powered by <span className="font-semibold">Enter Company</span>
                </p>
            </div>
        </footer>
    );
}
