import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div className="App">
      <a className="nav-link logo active" href="#"><img className="logo" src="images/logo.png"/></a>
      <NavBar />
      <LandingPage />
      <AboutMe/>
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
