

import Logo from '../Logo/Logo';
import './footer.css';

const Footer = ({id}) => {
    return (
    <div className="footer" id={id}>
        <div className="footerDeets">
            <div id="footerAddress">
                <h1>ADDRESS</h1> 
                <p>3562 Charles Blvd.</p>
                <p>Unit 3425</p>
                <p>Seattle, WA 23564</p>
                <p>USA</p>
            </div>
            <div id="footerHours">
                <h1>HOURS</h1> 
                <p>9-5 Monday - Friday</p>
                <p>9-3 Saturdays</p>
                <p>Closed Holidays</p>
            </div>
        </div>
        <div className="footerContact">
            <div>
            <h1>CONTACT US</h1> 
            <p>(555) 555 - 5555</p>
            <p>1 (800) 555 - 5555</p>
            </div>
            <div>
            <p>Just have a general qustion about our services?</p>
            <p>Send us an email:</p>
            <form>
                <input type="text" placeholder="Email address"></input>
                <input type="text" placeholder="Subject"></input>
                <textarea resize="none"></textarea>
                <button>Submit</button>
            </form>
            </div>
        </div>
        <div className="footerLogos">
            <h1>EXCAVATION COMPANY</h1>
            <h2>SINCE 1954</h2>
            <Logo fill="white"/>
        </div>
    </div>
    )

}

export default Footer;