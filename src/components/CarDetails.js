import { useNavigate, useParams } from 'react-router-dom';
import './../css/carDetails.css';
import { useState } from 'react';
import { ImArrowDown } from "react-icons/im";

function CarDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const cars = [
        { id: 1, name: "BMW 320d", images: ["/images/bmw.jpg", "/images/bmw1.jpg", "/images/bmw2.jpg"], engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 25, manufactured_year: 2012, engine_power: "135 kW", engine_capacity: "1995 cm³", number_of_doors: 4 },
        { id: 2, name: "Skoda Octavia", images: ["/images/skoda.jpg", "/images/skoda1.jpg", "/images/skoda2.jpg"], engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 30, manufactured_year: 2018, engine_power: "110 kW", engine_capacity: "1968 cm³", number_of_doors: 4 },
        { id: 3, name: "Audi A6", images: ["/images/audi.jpg", "/images/audi1.jpg", "/images/audi2.jpg"], engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 55, manufactured_year: 2018, engine_power: "210 kW", engine_capacity: "2967 cm³", number_of_doors: 4 },
        { id: 4, name: "Volkswagen Golf Mk7", images: ["/images/golf.jpg", "/images/golf1.jpg", "/images/golf2.jpg"], engine: "Diesel", transmission: "Automatic", body: "Hatchback", price: 30, manufactured_year: 2017, engine_power: "81 kW", engine_capacity: "1598 cm³", number_of_doors: 5 },
        { id: 5, name: "Volkswagen Passat B8", images: ["/images/passat.jpg", "/images/passat1.jpg", "/images/passat2.jpg"], engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 30, manufactured_year: 2015, engine_power: "88 kW", engine_capacity: "1598 cm³", number_of_doors: 4 },
        { id: 6, name: "Renault Megane dCi 110", images: ["/images/renault.jpg", "/images/renault1.jpg", "/images/renault2.jpg"], engine: "Diesel", transmission: "Manual", body: "Hatchback", price: 25, manufactured_year: 2018, engine_power: "81 kW", engine_capacity: "1461 cm³", number_of_doors: 5 },
        { id: 7, name: "Peugeot 2008", images: ["/images/peugeot.jpg", "/images/peugeot1.jpg", "/images/peugeot2.jpg"], engine: "Petrol", transmission: "Manual", body: "SUV", price: 30, manufactured_year: 2020, engine_power: "74 kW", engine_capacity: "1199 cm³", number_of_doors: 5 },
        { id: 8, name: "VW T-ROC", images: ["/images/t-roc.jpg", "/images/t-roc1.jpg", "/images/t-roc2.jpg"], engine: "Petrol", transmission: "Manual", body: "SUV", price: 30, manufactured_year: 2018, engine_power: "85 kW", engine_capacity: "999 cm³", number_of_doors: 5 },
        { id: 9, name: "BMW X6", images: ["/images/x6.jpg", "/images/x61.jpg", "/images/x62.jpg"], engine: "Diesel", transmission: "Automatic", body: "SUV", price: 70, manufactured_year: 2024, engine_power: "210 kW", engine_capacity: "2993 cm³", number_of_doors: 5 },
        { id: 10, name: "Volkswagen Golf Mk8", images: ["/images/golf8.jpg", "/images/golf81.jpg", "/images/golf82.jpg"], engine: "Hybrid", transmission: "Automatic", body: "Hatchback", price: 50, manufactured_year: 2021, engine_power: "150 kW", engine_capacity: "1400 cm³", number_of_doors: 5 },
    ];
    const car = cars.find(car => car.id === parseInt(id));
    const [currentImage, setCurrentImage] = useState(0);

    if (!car) {
        return <h2>Car not found</h2>;
    }

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % car.images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + car.images.length) % car.images.length);
    };


    return (
        <>
            <div className='car-details-welcome'>
                <ImArrowDown className='arrow-down' />
                <p onClick={() => navigate('/contact')}>RENT NOW</p>
            </div>
            <div className="car-details-container">
                <h1 className='car-details-title'>{car.name}</h1>
                <div className="slider">
                    <div className="prev" onClick={prevImage}>&lt;</div>
                    <img src={car.images[currentImage]} alt={car.name} className="slider-image" />
                    <div className="next" onClick={nextImage}>&gt;</div>
                    <div className="indicators">
                        {car.images.map((_, index) => (
                            <span key={index} className={index === currentImage ? "dot active" : "dot"} onClick={() => setCurrentImage(index)}></span>
                        ))}
                    </div>
                </div>

                <div className="car-info">
                    <p><strong>Engine:</strong> {car.engine}</p>
                    <p><strong>Transmission:</strong> {car.transmission}</p>
                    <p><strong>Body:</strong> {car.body}</p>
                    <p><strong>Price:</strong> ${car.price} per day</p>
                    <p><strong>Manufactured Year:</strong> {car.manufactured_year}</p>
                    <p><strong>Engine Power:</strong> {car.engine_power}</p>
                    <p><strong>Engine Capacity:</strong> {car.engine_capacity}</p>
                    <p><strong>Number of Doors:</strong> {car.number_of_doors}</p>
                </div>
            </div>
        </>
    );

}

export default CarDetails;
