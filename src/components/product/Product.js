import React from 'react';
import product1 from '../../assets/images/products/product-1-lying.jpg'
import product2 from '../../assets/images/products/product-2-lying.jpg';
import product3 from '../../assets/images/products/product-3-lying.jpg';
import product4 from '../../assets/images/products/product-4-lying.jpg';
import product5 from '../../assets/images/products/product-5-lying.jpg';
import product6 from '../../assets/images/products/product-6-lying.jpg';
import { FaLongArrowAltRight } from 'react-icons/fa'; 
import { translations } from '../../translations';
import { useLanguage } from '../../context/LanguageContext';

const ProductItem = ({ img, heading, description, link }) => {
    const { language } = useLanguage();
    const t = translations[language].products;  

    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-service">
                    <div className="product-image-container">
                        <img src={img} alt="" />
                    </div>
                    <h3>{heading}</h3>
                    <a href={link}> {t.readMore} <FaLongArrowAltRight /></a>
                </div>
            </div>
        </>
    )
}

const Product = () => {
    const { language } = useLanguage();
    const t = translations[language].products;

    const ProductData = [
        {
            id: 1,
            heading: t.products.product_1.name,
            img: product1,
            link: '/',
        },
        {
            id: 2,
            heading: t.products.product_2.name,
            img: product2,
            link: '/',
        },
        {
            id: 3,
            heading: t.products.product_1.name, 
            img: product3,
            link: '/',
        },
        {
            id: 4,
            heading: 'Flower Scaping',
            img: product4,
            link: '/',
        },
        {
            id: 5,
            heading: 'Tree Planting',
            img: product5,
            link: '/',
        },
        {
            id: 6,
            heading: 'Rubbish Removal',
            img: product6,
            link: '/',
        },
    
    ];

    return (
        <>
            <div className="service-area bg-4 pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        {ProductData.map((data) => (
                            <ProductItem
                                key={data.id}
                                img={data.img}
                                heading={data.heading}
                                description={data.description}
                                link={data.link}
                            />
                        ))}
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="single-service-large">
                                <h3>{t.companyName}</h3>
                                <p>{t.slogan}</p>
                                <a href="/contact" className="l-btn">{t.contactUs}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;