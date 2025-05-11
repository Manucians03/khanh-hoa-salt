import React from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import AboutItems from '../components/home-about/AboutItems';
import AboutTeam from '../components/home-about/AboutTeam';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Partners from '../components/partners/Partners';
const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <>
            <Header />
            <Breadcrumb 
                breadcrumbBg=""
                heading={t.title}
                description={t.description}
            />
            <AboutItems />
            <AboutTeam />
            <Partners />
            <Footer />
        </>
    )
}

export default About;

