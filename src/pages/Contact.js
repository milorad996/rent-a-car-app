import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import './../css/contact.css';

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="contact-hero-content">
                    <h1>Contact Us</h1>
                    <p>We're here to help! Reach out to us for any inquiries.</p>
                </div>
            </div>

            <section className="contact-content">
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p><FaMapMarkerAlt /> 123 Main Street, City, Country</p>
                    <p><FaPhoneAlt /> +123 456 7890</p>
                    <p><FaEnvelope /> contact@rentacar.com</p>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>

                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <iframe
                    title="Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094126!2d144.95373631564636!3d-37.8162794420211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2z44CSMzAwMCBB1TVt!5e0!3m2!1sen!2sus!4v1636603438425"
                    width="100%" height="300" allowFullScreen="" loading="lazy"></iframe>
            </section>
        </div>
    );
}

export default Contact;
