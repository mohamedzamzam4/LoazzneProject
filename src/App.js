import logo from "./logo.svg";
import "./App.css";
import Bgsecod from "./components/Bgsecod";
import FeauturesSection from "./components/FeauturesSection";
import Reparation from "./components/Reparation";
import Services from "./components/Services";
import Bar from "./components/Bar";
import NavBar from "./components/NavBar";
import Numbers from "./components/Numbers";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ImagesMaint from "./components/ImagesMaint";
import Envato from "./components/Envato";
import TestimonialSwiper from "./components/TestimonialSwiper";
import Coolit from "./components/Coolit";
import Latestnews from "./components/Latestnews";
import Formulaire from "./components/Formulaire";
import Footer from "./components/Footer";



function App() {
  return (
   
    <div className="App"> <title>Home Page - Loazzne</title>
      <ScrollToTopButton />
      <NavBar />
      <Bgsecod />
      <FeauturesSection />
      <Reparation />
      <Services />
      <Bar />
      <Numbers />
      <ImagesMaint />
      <TestimonialSwiper/>
      <Envato />
     <Coolit/>
     <Latestnews/>
     <Formulaire/>
     <Footer/>
    </div>
  );
}

export default App;
