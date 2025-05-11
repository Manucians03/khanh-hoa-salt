import React from 'react';
import { translations } from '../../translations';
import { useLanguage } from '../../context/LanguageContext';

const AboutItem = ({ heading, description, img }) => {
    return (
        <>
            <div className="about-item">
                <h4>{heading}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}

const AboutValues = ({ heading, description, img }) => {
    return (
        <>
            <div className="about-history">
                <h4>{heading}</h4>
                <div className="about-values-item">
                    {description.map((data, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <h6 key={index}>{data.title}</h6>
                            <p key={index}>{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const AboutItems = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <>
            <div className="experience-area pt-110 pb-110">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 offset-xl-2 offset-lg-2 offset-md-2">
                            {t.items.map((data, index) => (
                                <AboutItem
                                    key={index}
                                    heading={data.title}
                                    description={data.description}
                                />
                            ))}
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <AboutValues
                                heading={t.value}
                                description={t.valueText}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutItems;