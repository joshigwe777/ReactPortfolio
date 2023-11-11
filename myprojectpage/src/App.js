import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return <>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/myprojectpage/aboutMe" element={<AboutMe/>}/>
          <Route path="/myprojectpage/portfolio" element={<Portfolio/>}/>
          <Route path="/myprojectpage/contactForm" element={<ContactForm/>}/>
          <Route path="/myprojectpage/experience" element={<Experience/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </>
}

export default App;
