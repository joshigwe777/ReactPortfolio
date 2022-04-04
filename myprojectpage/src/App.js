import ContactForm from "./components/ContactForm";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage />
      <Portfolio/>
      <ContactForm/>
    </div>
  );
}

export default App;
