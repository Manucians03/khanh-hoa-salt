import React from 'react';
import Slider from "react-slick";
import { translations } from '../../translations';
import { useLanguage } from '../../context/LanguageContext';


const PartnerItem = ({ img, name, position, description }) => {
    return (
        <>
            <div className="single-partner">
                <div className="partner-img">
                    <img src={img} alt="" />
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}

const Partners = () => {
    const { language } = useLanguage();
    const t = translations[language].home;

    const PartnersSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="partners-area bg-4 pt-90 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>{t.title}</span>
                                <h2>{t.text}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider {...PartnersSlider} className="partners-slider">
                            {t.partners.items.map((data) => (
                                <PartnerItem
                                    key={data.id}
                                    img={data.img}
                                    name={data.name}
                                    description={data.description}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners;