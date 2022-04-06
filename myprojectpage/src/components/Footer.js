import { Link } from "react-router-dom";

function Footer() {
    return <>
        <footer>
            <nav className="navbar row my-3">
                <Link className="ml-auto" to="/myprojectpage"><img className="logo-footer" src="images/logo.png" /></Link>
                <a href="https://github.com/joshigwe777" target="_blank"><i className="fa-brands mx-3 fa-2xl fa-github"></i></a>
                <a href="https://www.linkedin.com/in/joshua-igwe-229ba99a/" target="_blank"><i className="fa-brands mx-3 fa-2xl fa-linkedin"></i></a>
                <a href="https://twitter.com/Joshua__Igwe" target="_blank"><i className="fa-brands fa-2xl mx-3 fa-twitter"></i></a>
                <a><i className="fa-brands fa-2xl mx-3 fa-youtube" target="_blank"></i></a>
            </nav>
        </footer>
    </>
}
export default Footer;