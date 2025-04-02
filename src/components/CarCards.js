
import { useNavigate } from 'react-router-dom';
import './../css/carCards.css';



function CarCards() {

    const navigate = useNavigate();
    const cars = [
        { id: 1, name: "BMW 320d", image: "/images/bmw.jpg", engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 25 },
        { id: 2, name: "Skoda Octavia", image: "/images/skoda.jpg", engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 30 },
        { id: 3, name: "Audi A6", image: "/images/audi.jpg", engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 55 },
        { id: 4, name: "Volkswagen Golf Mk7", image: "/images/golf.jpg", engine: "Diesel", transmission: "Automatic", body: "Hatchback", price: 30 },
        { id: 5, name: "Volkswagen Passat B8", image: "/images/passat.jpg", engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 30 }
    ];


    return (
        <>
            <div className='cars-container'>
                <div className="car-cards-title">Find Your Perfect Ride</div>

                {cars.map(car => (
                    <div className='car-card' key={car.id}>
                        <div className='car-image'>
                            <img src={car.image} alt={car.name} />
                        </div>
                        <div className='car-description'>
                            <h2 className="card-title">{car.name}</h2>
                            <ul className='car-description-list'>
                                <li className='description-li'><i className="fas fa-cogs"></i> Engine: {car.engine}</li>
                                <li className='description-li'><i className="fas fa-random"></i> Transmission: {car.transmission}</li>
                                <li className='description-li'><i className="fas fa-car"></i> Body Type: {car.body}</li>
                            </ul>
                        </div>
                        <div className='car-details'>
                            <p className='car-price-details'>From €{car.price}/day</p>
                            <button className='car-details-button' onClick={() => navigate(`/car-details/${car.id}`)}>View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CarCards;