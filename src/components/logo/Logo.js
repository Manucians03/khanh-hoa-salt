import React from 'react';
import { useLanguage } from '../../context/LanguageContext';    
import { translations } from '../../translations';

const Logo = () => {
    const { language } = useLanguage();
    const t = translations[language].header;
    return (
        <div className="logo">
            <h1>{t.name}</h1>
        </div>
    )
}

export default Logo;