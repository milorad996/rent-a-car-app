import './../css/rentalTerms.css';

function RentalTerms() {
    return (
        <div className="rental-terms-page">
            <div className="rental-terms-hero">
                <img src={`${process.env.PUBLIC_URL}/images/car-hero.jpg`} alt="Car Rental" className="hero-image" />
                <div className="hero-content">
                    <h1>Rental Terms & Conditions</h1>
                    <p>Learn all the details before making your rental decision.</p>
                </div>
            </div>

            <div className="rental-terms-container">
                <section className="rental-terms-section">
                    <h2>Eligibility Requirements</h2>
                    <p>To rent a vehicle, you must meet the following criteria:</p>
                    <ul>
                        <li>Minimum age of 21 years</li>
                        <li>Possess a valid driver's license for at least 1 year</li>
                        <li>A credit card in your name is required for payment</li>
                    </ul>
                </section>

                <section className="rental-terms-section">
                    <h2>Rental Period</h2>
                    <p>The minimum rental period is 1 day, and you can rent for as long as you need.</p>
                    <ul>
                        <li>Daily rental is available</li>
                        <li>Weekly and monthly rates are available with discounts</li>
                    </ul>
                </section>

                <section className="rental-terms-section">
                    <div className="rental-terms-content">
                        <div className="text-section">
                            <h2>Insurance and Liability</h2>

                            <p>All rentals come with basic insurance coverage, but additional coverage is available.</p>
                            <ul>
                                <li>Basic insurance is included in the rental price</li>
                                <li>Additional insurance options are available</li>
                                <li>You are responsible for any damage to the vehicle during the rental period</li>
                            </ul>
                        </div>
                        <div className="image-section">
                            <img src={`${process.env.PUBLIC_URL}/images/insurance-icon.jpg`} alt="Insurance and Liability" className="section-image" />
                        </div>
                    </div>
                </section>

                <section className="rental-terms-section">
                    <h2>Fuel Policy</h2>
                    <p>We operate on a full-to-full fuel policy:</p>
                    <ul>
                        <li>You will receive the car with a full tank of fuel</li>
                        <li>Return the car with a full tank to avoid extra charges</li>
                    </ul>
                </section>

                <section className="rental-terms-section">
                    <h2>Cancellation Policy</h2>
                    <p>You may cancel your reservation up to 24 hours before your rental without a fee.</p>
                    <ul>
                        <li>No charge for cancellations made 24 hours in advance</li>
                        <li>Cancellations within 24 hours may incur a fee</li>
                    </ul>
                </section>
            </div>


        </div>
    );
}

export default RentalTerms;
