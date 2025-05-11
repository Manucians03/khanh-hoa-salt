import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { FaLevelUpAlt } from "react-icons/fa";
import { LanguageProvider } from './context/LanguageContext';

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Products from './pages/Products';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/vendor/modal-video/modal-video.min.css';
import './assets/vendor/slick/slick.css';


function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact  element={<About />} />
            <Route path="/products" exact  element={<Products />} />
            <Route path="/product-details" exact  element={<ProductDetails />} />
            <Route path="/contact" exact  element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaLevelUpAlt />} />    
      </Router>
    </LanguageProvider>
  );
}

export default App;
