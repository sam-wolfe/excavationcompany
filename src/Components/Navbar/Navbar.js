import "./nav.css";

const Navbar = ({scrollPosition, onNavClick}) => {
    return (
    <nav className="navbar">
        <ul className="nav-links">
            <li onClick={() => {
                 onNavClick("about");
            }} className="nav-item">About</li>
            <li onClick={() => {
                 onNavClick("services");
            }} className="nav-item">Services</li>
                        <li onClick={() => {
                 onNavClick("get-quote");
            }} className="nav-item">Get a Quote</li>
            <li onClick={() => {
                 onNavClick("footer");
            }} className="nav-item">Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar;