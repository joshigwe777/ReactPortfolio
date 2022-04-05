import { Link } from "react-router-dom";
function NavBar() {
    return <>
        <nav className="navbar navbar-expand-lg ">
            <Link to="/"><img className="logo mr-auto" src="images/logo.png" /></Link>
            <Link to="/" className="ml-auto nav-link">Home</Link>
            <Link to="/portfolio" class="nav-link">Portfolio</Link>
            <Link to="/aboutMe" class="nav-link">About Me</Link>
            <Link to="/contactForm" class="nav-link">Contact</Link>

        </nav>
    </>
}
export default NavBar;