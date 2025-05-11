import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../../components/logo/Logo';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import { translations } from '../../translations';
const Header = () => {

    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].header;
    return (
        <>
            <div className="header-bottom sticky-top">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-4">
                            <Logo />
                        </div>
                        <div className="col-6">
                            <Nav />
                        </div>
                        <div className="col-2">
                            <div className="language-switcher">
                                <button 
                                    onClick={toggleLanguage}
                                    className="language-btn"
                                >
                                    {language === 'en' ? 'VI' : 'EN'}
                                </button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;