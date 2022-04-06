import { Link } from "react-router-dom";
function NavBar() {
    return <>
        <nav className="navbar navbar-expand-lg ">
            <Link to="/myprojectpage"><img className="logo mr-auto" src="images/logo.png" /></Link>
            <Link to="/myprojectpage" className="ml-auto nav-link">Home</Link>
            <Link to="/myprojectpage/portfolio" class="nav-link">Portfolio</Link>
            <Link to="/myprojectpage/aboutMe" class="nav-link">About Me</Link>
            <Link to="/myprojectpage/contactForm" class="nav-link">Contact</Link>

        </nav>
    </>
}
export default NavBar;