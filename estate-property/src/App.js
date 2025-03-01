import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Home from "./components/home.js";
import Favourites from "./components/favourites.js";
import SidePanel from "./components/sidePanel.js";
import House from "./components/properties/house.js";
import Flat from "./components/properties/flat.js";
import Apartment from "./components/properties/apartment.js";
import Property from "./components/property.js";
import Footer from "./components/footer.js";
import { FavouritesProvider } from "./components/favouritesContext.js";
import "./components/style.css";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <FavouritesProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/properties/house" element={<House />} />
          <Route path="/properties/flat" element={<Flat />} />
          <Route path="/properties/apartment" element={<Apartment />} />
          <Route path="/property/:id" element={<Property/>}/>
        </Routes>
      </div>


      <Footer/>
    </FavouritesProvider>


  );
}

export default App;

