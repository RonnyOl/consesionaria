export default function Card({ titulo, km, img, precio }) {
    return (
        <div
            className="
                rounded-xl overflow-hidden cursor-pointer 
                transition-all duration-300 
                max-w-2xl w-96
                backdrop-blur-xl
                
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]

                border border-transparent
                hover:shadow-[0_8px_35px_rgba(0,0,0,0.12)]
                hover:-translate-y-1

                hover:border-[var(--main)]
                hover:border-opacity-60
                hover:[box-shadow:0_0_20px_rgba(200,163,74,0.45)]
                font-manrope
                border-b-[var(--main)]
                border-2
            "
        >

            <div className="overflow-hidden relative font-funnel">
                <img
                    src="/Mercedez.png"
                    className="absolute top-3 left-3 w-7 opacity-90 z-20"
                />

                <img
                    src={img}
                    alt={titulo + " " + km}
                    className="
                w-full h-56 object-cover
                transition-transform duration-300
                hover:scale-105
                "
                />

                {/* Pequeño overlay dorado en la parte inferior */}
                <div className="
                    absolute bottom-0 left-0 w-full h-14 
                    bg-gradient-to-t from-[rgba(200,163,74,0.22)] to-transparent
                "></div>
            </div>

            <div className="px-5 py-5 flex flex-col gap-6 backdrop-blur-3xl bg-none ">

                <div>

                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                        {titulo}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1 flex gap-2">
                        Kilometraje
                        <span className="font-semibold text-[var(--foreground)]">
                            {km}km
                        </span>
                    </p>
                </div>

                <div className="w-full flex text-manrope font-bold justify-between">

                    <button className="">Ver más</button>
                    <p className=" text-lg text-[var(--main)] tracking-wide drop-shadow-sm">
                        US$ {precio}
                    </p>
                </div>


            </div>
        </div>
    );
}
