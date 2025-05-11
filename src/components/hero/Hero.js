import React from 'react';
import {Link} from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].home.hero;

    return (
        <>
            
            <div className="hero-area height-800 bg-property d-flex align-items-center" data-overlay="black" data-opacity="7" style={{ backgroundImage: '' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-wrapper">
                                <h1>{t.title}</h1>
                                <p>{t.slogan}</p>
                                <Link to="/projects" className="l-btn">{t.contactUs}</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-popup-content">
                                <img src="" alt="" />
                                <div className="hero-popup-video">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;