import React from 'react';
import {Link} from 'react-router-dom';
import { FaPhoneAlt, FaMapMarker } from 'react-icons/fa';
import { translations } from '../../translations';
import { useLanguage} from '../../context/LanguageContext';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <>
            <footer>
                <div className="footer-top bg-property theme-bg-2 pt-110 pb-80" style={{ backgroundImage: `url(${"FooterBG"})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget-1">
                                    <div className="footer-title">
                                        <h4>{t.name}</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>{t.saying}</p>
                                    </div>
                                    <div className="footer-info">
                                        <a href={`tel:+842253581589`}><FaPhoneAlt /> {t.phoneText}</a>
                                    </div>
                                    <div className="footer-info">
                                        <a href={`https://www.google.com/maps/@20.821468,106.6998721,17z?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D`}><FaMapMarker/> {t.addressText}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <div className="footer-widget-2">
                                    <div className="footer-title">
                                        <h4>{t.quickLinks}</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">{t.home}</Link></li>
                                            <li><Link to="/about">{t.about}</Link></li>
                                            <li><Link to="/products">{t.products}</Link></li>
                                            <li><Link to="/contact">{t.contact}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <div className="footer-widget-3">
                                    <div className="footer-title">
                                        <h4>{t.ourProducts}</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Muối tinh</Link></li>
                                            <li><Link to="/">Muối i-ốt</Link></li>
                                            <li><Link to="/">Muối tinh khiết</Link></li>
                                            <li><Link to="/">Muối công nghiệp</Link></li>
                                            <li><Link to="/">Muối chuyên biệt</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-1 pt-40 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="copyright">
                                    <p>© 2025 Khanh Hoa Salt Co,. Ltd. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;