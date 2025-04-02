import { SiGithub, SiLinkedin } from "react-icons/si";
import './../css/footer.css';



function FooterComponent() {
    return (
        <div className='copyright-section'>
            <div className='social-icons'>
                <a className="github" href="https://github.com/milorad996"><SiGithub /></a>
                <a className="linkedin" href="https://www.linkedin.com/in/milorad-savkovic-673b29183/"><SiLinkedin /></a>
            </div>
            <p className="copyright-title">&copy; 2025 Milorad Sakovic</p>
        </div>
    )
}

export default FooterComponent;