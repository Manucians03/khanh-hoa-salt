import React from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const Nav = () => {
    const { language } = useLanguage();
    const t = translations[language].nav;

    return (
        <div className="main-menu text-center">
            <nav id="mobile-menu">
                <ul>
                    <li><Link to="/">{t.home}</Link></li>
                    <li><Link to="/about">{t.about}</Link></li>
                    <li><Link to="/products">{t.products}</Link></li>
                    <li><Link to="/contact">{t.contact}</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;