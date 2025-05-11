import React from "react";
import Header from "../common/header/Header";
import Hero from "../components/hero/Hero";
import Product from "../components/product/Product";
import ContactForm from "../components/contact/ContactForm";
import AboutTeam from "../components/home-about/AboutTeam";
import Footer from "../common/footer/Footer";
import Partners from "../components/partners/Partners";
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Product />
            <AboutTeam />
            <Partners />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home;