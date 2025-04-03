import { useNavigate } from 'react-router-dom';
import './../css/allCars.css';


function AllCars() {


    const navigate = useNavigate();

    const cars = [
        { id: 1, name: "BMW 320d", image: `${process.env.PUBLIC_URL}/images/bmw.jpg`, engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 25 },
        { id: 2, name: "Skoda Octavia", image: `${process.env.PUBLIC_URL}/images/skoda.jpg`, engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 30 },
        { id: 3, name: "Audi A6", image: `${process.env.PUBLIC_URL}/images/audi.jpg`, engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 55 },
        { id: 4, name: "Volkswagen Golf Mk7", image: `${process.env.PUBLIC_URL}/images/golf.jpg`, engine: "Diesel", transmission: "Automatic", body: "Hatchback", price: 30 },
        { id: 5, name: "Volkswagen Passat B8", image: `${process.env.PUBLIC_URL}/images/passat.jpg`, engine: "Diesel", transmission: "Automatic", body: "Sedan", price: 30 },
        { id: 6, name: "Renault Megane dCi 110", image: `${process.env.PUBLIC_URL}/images/renault.jpg`, engine: "Diesel", transmission: "Manual", body: "Hatchback", price: 25 },
        { id: 7, name: "Peugeot 2008", image: `${process.env.PUBLIC_URL}/images/peugeot.jpg`, engine: "Petrol", transmission: "Manual", body: "SUV", price: 30 },
        { id: 8, name: "VW T-ROC", image: `${process.env.PUBLIC_URL}/images/t-roc.jpg`, engine: "Petrol", transmission: "Manual", body: "SUV", price: 30 },
        { id: 9, name: "BMW X6", image: `${process.env.PUBLIC_URL}/images/x6.jpg`, engine: "Diesel", transmission: "Automatic", body: "SUV", price: 70 },
        { id: 10, name: "Volkswagen Golf Mk8", image: `${process.env.PUBLIC_URL}/images/golf8.jpg`, engine: "Hybrid", transmission: "Automatic", body: "Hatchback", price: 50 }
    ];




    return (
        <div className="all-cars-container">
            <div className="all-cars-welcome">
                <div className='all-cars-welcome-content'>
                    <h2 className="all-cars-title">Explore Our Car Fleet</h2>
                    <p className="all-cars-subtitle">Find the perfect ride for any occasion –
                        from economy to luxury!</p>
                    <button className='all-cars-button' onClick={() => navigate('/contact')}>CONTACT US</button>
                </div>
            </div>

            <div className='all-cars-cards'>
                {cars.map(car => (
                    <div className='all-cars-card' id={car.id}>
                        <div className='all-cars-image'>
                            <img src={car.image} alt={car.name} />
                        </div>
                        <div className='all-cars-description'>
                            <h2 className="all-cars-card-title">{car.name}</h2>
                            <ul className='all-cars-description-list'>
                                <li className='card-description-li'><i className="fas fa-all-cars fa-cogs fa-fw"></i>Engine: {car.engine}</li>
                                <li className='card-description-li'><i className="fas fa-all-cars fa-random fa-fw"></i>Transmission: {car.transmission}</li>
                                <li className='card-description-li'><i className="fas fa-all-cars fa-car fa-fw"></i>Body Type: {car.body}</li>
                            </ul>
                        </div>
                        <div className='all-cars-details'>
                            <p className='all-cars-price-details'>From €{car.price}/day</p>
                        </div>
                        <button className='all-cars-details-button' onClick={() => navigate(`/car-details/${car.id}`)}>View Details</button>
                    </div>

                ))}
            </div>
            <div className='our-mission-main-container'>
                <h2 className='our-mission-title'>Our Mission</h2>
                <div className='our-mission-container'>
                    <div className='our-mission-left'>
                        <p className='our-mission-description'>
                            At Rent A Car, our mission is to provide reliable and affordable car rental services.
                            We are dedicated to offering a seamless experience for our customers by providing top-quality vehicles
                            and exceptional customer service. Whether you're traveling for business or leisure, we ensure your trip
                            is smooth and enjoyable with no hidden fees or surprises.
                        </p>
                        <img src={`${process.env.PUBLIC_URL}/images/mission.jpg`} alt='Our Mission' />
                    </div>
                    <div className='our-mission-right'>
                        <ul className='our-mission-list'>
                            <li className='our-mission-li'>
                                <i className="fas fa-road"></i> Unlimited Mileage
                            </li>
                            <li className='our-mission-li'>
                                <i className="fas fa-truck"></i> Vehicle Delivery & Pickup
                            </li>
                            <li className='our-mission-li'>
                                <i className="fas fa-shield-alt"></i> Full Insurance Coverage
                            </li>
                            <li className='our-mission-li'>
                                <i className="fas fa-phone-alt"></i> 24/7 Customer Support
                            </li>
                            <li className='our-mission-li'>
                                <i className="fas fa-gas-pump"></i> Fuel Options Available
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default AllCars;