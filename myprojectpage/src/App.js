import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return <>
    <div className="App">
      <BrowserRouter>
        <a className="nav-link logo active" href="#"><img className="logo" src="images/logo.png" /></a>
        <NavBar />
        <Routes>

          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/aboutMe" element={<AboutMe/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contactForm" element={<ContactForm/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </>
}

export default App;
