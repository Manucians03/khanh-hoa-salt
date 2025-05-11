import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight, FaHeadphones, FaEnvelopeOpen, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const ContactForm = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <>
            <div className="contact-area white-bg pt-110 pb-110">
                <div className="container">
                    <div className="box-shadow-3 pt-60 pb-60 pl-80 pr-80">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-form pr-70">
                                    <div className="section-title mb-40">
                                        <span>{t.title}</span>
                                        <h2>{t.title}</h2>
                                    </div>
                                    <form action="/">
                                        <input type="text" placeholder={t.yourName} />
                                        <input type="email" placeholder={t.yourEmail} />
                                        <input type="text" placeholder={t.yourSubject} />
                                        <textarea placeholder={t.writeYourMessage}></textarea>
                                        <button className="l-btn">{t.sendUsMessage} <FaArrowRight /></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-box bg-1 pt-60 pb-35 pl-35 pr-35 mr-40">
                                    <h3>{t.companyName}</h3>
                                    <p>{t.slogan}</p>
                                    <ul className="mt-40">
                                        <li><FaHeadphones /><span>{t.emergencyLine}: <Link to="/">{t.phone}</Link></span></li>
                                        <li><FaEnvelopeOpen /><span>{t.ourEmail}: <Link to="/">{t.email}</Link></span></li>
                                        <li><FaMapMarkerAlt /><span>{t.location}: {t.address}</span></li>
                                        <li><FaClock /><span>{t.hours}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;