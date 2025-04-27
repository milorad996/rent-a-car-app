
import { useNavigate } from 'react-router-dom';
import './../css/home.css';
import CarCards from '../components/CarCards';

function HomePage() {

    const navigate = useNavigate();
    return (
        <div className="home-container">
            {/* <div className="welcome-image">
                <h2 className="welcome-title">Drive Your Freedom, Rent Your Adventure</h2>
                <p className="welcome-subtitle">Premium cars, hassle-free rentals. Book your perfect ride today!</p>
                <button className="welcome-button" onClick={() => navigate('/contact')}>CONTACT US</button>
            </div> */}
            <div className="welcome-image">
                <div className="welcome-overlay">
                    <h1 className="welcome-title">Drive Your Freedom</h1>
                    <p className="welcome-subtitle">Luxury cars, delivered. Rent your adventure today.</p>
                    <button className="welcome-button" onClick={() => navigate('/contact')}>
                        Get in Touch
                    </button>
                </div>
            </div>



            <div className='about-container'>
                <div className='about-image-container' onClick={() => navigate('/contact')}>
                    <img src={`${process.env.PUBLIC_URL}/images/aboutUs.jpg`} alt='About Us' />
                </div>
                <div className='about-text'>
                    <h2 className='about-title'>Discover the Best Car Rental Experience</h2>
                    <p className='about-subtitle'>
                        At RentACar, we offer a variety of vehicles at competitive prices.
                        Whether you're looking for a luxurious ride, a family car, or a
                        compact city car, we've got the perfect vehicle for your needs.
                        Enjoy hassle-free rentals, flexible rental periods, and top-notch
                        customer service. Book with us today and experience the best in the
                        car rental industry.
                    </p>
                    <p className='about-subtitle-two'>
                        We pride ourselves on our diverse fleet, featuring eco-friendly cars, SUVs, and sports models to suit every lifestyle. With conveniently located rental offices across the region, you can easily pick up and drop off your vehicle—whether you're planning a weekend getaway or an extended road trip.
                    </p>
                </div>
            </div>
            <CarCards />
            <div className='offer-container'>
                <h2 className='offer-title'>Why Choose Us?</h2>
                <div className='offer-list'>
                    <div className='offer-check'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p className='offer-subtitle'>Affordable Prices</p>
                    </div>

                    <div className='offer-check'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p className='offer-subtitle'>24/7 Customer Support</p>
                    </div>

                    <div className='offer-check'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p className='offer-subtitle'>Wide Vehicle Selection</p>
                    </div>

                    <div className='offer-check'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p className='offer-subtitle'>No Hidden Fees</p>
                    </div>

                    <div className='offer-check'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p className='offer-subtitle'>Easy Online Booking</p>
                    </div>

                    <div className='offer-check'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p className='offer-subtitle'>Unlimited Mileage</p>
                    </div>

                    <div className='offer-check'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p className='offer-subtitle'>Comprehensive Insurance</p>
                    </div>

                    <div className='offer-check'>
                        <i class="fa-regular fa-circle-check"></i>
                        <p className='offer-subtitle'>Free Airport Pickup</p>
                    </div>
                </div>
            </div>
            <div className='driver-container'>
                <div className='driver-description'>
                    <h2 className='driver-title'>Premium Car Rental with Professional Drivers</h2>
                    <p className='driver-subtitle'>Enjoy a seamless travel experience with our professional
                        chauffeur service. Whether you're on a business trip, attending a special event,
                        or simply prefer to sit back and relax, our skilled drivers ensure a smooth and
                        stress-free journey. With a fleet of high-quality vehicles and experienced
                        professionals, we provide comfort, safety, and reliability. Book your ride
                        today and let us handle the driving while you focus on what matters most.</p>
                    <p className='driver-subtitle-two'>For those who prefer a more personalized experience, our professional drivers are
                        at your service. From airport transfers to guided tours, we offer a range of
                        chauffeur-driven options tailored to your needs. </p>
                </div>
                <div className='driver-image-container' onClick={() => navigate('/contact')}>
                    <img src={`${process.env.PUBLIC_URL}/images/driver.jpg`} alt='Driver' />
                </div>
            </div>

            <div className='office-gallery-container'>
                <h2 className='office-title'>Our Rental Office</h2>
                <div className='office-gallery'>
                    <div className='office-gallery-img1 item'>
                        <img src={`${process.env.PUBLIC_URL}/images/img1.jpg`} alt='Office' />
                        <p className='image-content'>Seamless Travel Experience</p>
                    </div>
                    <div className='office-gallery-img2 item'>
                        <img src={`${process.env.PUBLIC_URL}/images/img2.jpg`} alt='Office' />
                        <p className='image-content'>Affordable Prices</p>
                    </div>
                    <div className='office-gallery-img3 item'>
                        <img src={`${process.env.PUBLIC_URL}/images/img3.jpg`} alt='Office' />
                        <p className='image-content'>Reliable & Trustworthy</p>
                    </div>
                    <div className='office-gallery-img4 item'>
                        <img src={`${process.env.PUBLIC_URL}/images/img4.jpg`} alt='Office' />
                        <p className='image-content'>Fast & Easy Booking</p>
                    </div>
                    <div className='office-gallery-img5 item'>
                        <img src={`${process.env.PUBLIC_URL}/images/img5.jpg`} alt='Office' />
                        <p className='image-content'>24/7 Support</p>
                    </div>
                    <div className='office-gallery-img6 item'>
                        <img src={`${process.env.PUBLIC_URL}/images/img6.jpg`} alt='Office' />
                        <p className='image-content'>Premium Car Selection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomePage;