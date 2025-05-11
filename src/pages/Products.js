import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Footer from '../common/footer/Footer';
import Product from '../components/product/Product';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Products = () => {
    const { language } = useLanguage();
    const t = translations[language].products;

    return (
        <>
            <Header />
            <Breadcrumb 
                breadcrumbBg={"breadcrumbBg"} 
                heading={t.title} 
                description={t.text} 
            />
            <Product />
            <Footer />
        </>
    )
}

export default Products;