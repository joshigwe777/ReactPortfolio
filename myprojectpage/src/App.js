import ContactForm from "./components/ContactForm";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage />
      <ContactForm/>
    </div>
  );
}

export default App;
