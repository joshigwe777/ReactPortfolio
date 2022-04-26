import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Footer() {
    return <>
        <footer>
            <div className="container-fluid">
                <nav className="navbar row my-3">
                    <Link className="ml-auto" to="/myprojectpage"><img className="logo-footer" src={logo} /></Link>
                    <a href="https://github.com/joshigwe777" target="_blank"><i className="fa-brands mx-3 fa-2xl fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/joshua-igwe-229ba99a/" target="_blank"><i className="fa-brands mx-3 fa-2xl fa-linkedin"></i></a>
                    <a href="https://twitter.com/Joshua__Igwe" target="_blank"><i className="fa-brands fa-2xl mx-3 fa-twitter"></i></a>
                    <a><i className="fa-brands fa-2xl mx-3 fa-youtube" target="_blank"></i></a>
                </nav>
            </div>
        </footer>
    </>
}
export default Footer;