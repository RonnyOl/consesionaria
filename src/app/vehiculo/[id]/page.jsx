"use client";
import ImageGallery from "../../../components/imageGallery";
import RelatedCars from "../../../components/relatedCars";

export default function ProductPage() {
    const mockCar = {
        title: "Mercedes Benz",
        model: "C300",
        year: 2025,
        km: "3.200 km",
        price: "US$ 92.000",
        color: "Gris",
        marca: "Mercedes Benz",
        condicion: "Nuevo",
        traccion: "4x4",
        motor: "3.2",
        images: [
            "https://i.imgur.com/SnZWeDk.png",
            "https://i.imgur.com/Ihi6y1I.png",
            "https://i.imgur.com/DtG31BK.png",
            "https://i.imgur.com/0M0miHr.png",
            "https://i.imgur.com/Q62lk7H.png",
            "https://i.imgur.com/RINrSqx.png",
            "https://i.imgur.com/egsbWwO.png"
        ],
    };
    const mockCar2 = {
        title: "Mercedes kei",
        model: "C300",
        year: 2025,
        km: "3.200 km",
        price: "US$ 92.000",
        color: "Gris",
        marca: "Mercedes Benz",
        condicion: "Nuevo",
        traccion: "4x4",
        motor: "3.2",
        images: [
            "https://i.imgur.com/SnZWeDk.png",
            "https://i.imgur.com/Ihi6y1I.png",
            "https://i.imgur.com/DtG31BK.png",
            "https://i.imgur.com/0M0miHr.png",
            "https://i.imgur.com/Q62lk7H.png",
            "https://i.imgur.com/RINrSqx.png",
            "https://i.imgur.com/egsbWwO.png"
        ],
    };
    const related = [mockCar, mockCar, mockCar, mockCar2, mockCar2, mockCar2]; // Temporal hasta tener DB
    return (

        <div className="main-section bg-center  ">
            <div className="w-full min-h-[30rem] flex justify-center font-sansation p-6 flex gap-8 ">
                {/* Galería */}
                <ImageGallery images={mockCar.images} />

                {/* Info del auto */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold">{mockCar.title}</h2>
                    <span className="text-3xl font-semibold">{mockCar.price}</span>

                    <div className="text-xl">
                        <span className="mr-4">{mockCar.year}</span>
                        <span>{mockCar.km}</span>
                    </div>
                    <div className="flex gap-6">
                        <button className="btn-ig text-white px-6 py-3 rounded-xl w-fit">
                            Llamar
                        </button>
                        <button className="btn-ig text-white px-6 py-3 rounded-xl w-fit">
                            Whatsapp
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full min-h-[5rem] flex font-sansation p-6 items-start gap-16 justify-center lg:flex-row flex-col">

                {/* COLUMNA 1 */}
                <div className="flex flex-col gap-4 w-full max-w-[400px]">
                    <div className="info-item">
                        <h2>Título</h2>
                        <p>{mockCar.title}</p>
                    </div>
                    <div className="info-item">
                        <h2>Motor</h2>
                        <p>{mockCar.motor}</p>
                    </div>
                    <div className="info-item">
                        <h2>Precio</h2>
                        <p>{mockCar.price}</p>
                    </div>
                    <div className="info-item">
                        <h2>Tracción</h2>
                        <p>{mockCar.traccion}</p>
                    </div>
                    <div className="info-item">
                        <h2>Color</h2>
                        <p>{mockCar.color ?? "N/A"}</p>
                    </div>
                </div>

                {/* COLUMNA 2 */}
                <div className="flex flex-col gap-4 w-full max-w-[400px]">
                    <div className="info-item">
                        <h2>Título</h2>
                        <p>{mockCar.title}</p>
                    </div>
                    <div className="info-item">
                        <h2>Motor</h2>
                        <p>{mockCar.motor}</p>
                    </div>
                    <div className="info-item">
                        <h2>Precio</h2>
                        <p>{mockCar.price}</p>
                    </div>
                    <div className="info-item">
                        <h2>Tracción</h2>
                        <p>{mockCar.traccion}</p>
                    </div>
                    <div className="info-item">
                        <h2>Potencia</h2>
                        <p>{mockCar.potencia ?? "N/A"}</p>
                    </div>
                </div>
            </div>
            <RelatedCars cars={related} />

        </div>
    );
}
