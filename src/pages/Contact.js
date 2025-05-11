import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import Footer from '../common/footer/Footer';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <>
            <Header />
            <Breadcrumb 
                breadcrumbBg={"breadcrumbBg"}
                heading={t.title}
                description={t.text}
            />
            <ContactForm />
            <ContactMap />
            <Footer />
        </>
    )
}

export default Contact;