import React from "react";
import { translations } from "../../translations";
import { useLanguage } from "../../context/LanguageContext";

const AboutTeamItem = ({
  img,
  heading,
  position,
}) => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div className="single-team-style-2 text-center">
          <div className="single-team-style-2-img">
            <img src={img} alt=""/>
          </div>
          <div className="single-team-content-style-2">
            <h4>{heading}</h4>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutTeam = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <>
      <div className="team-area white-bg pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <h2>
                  {t.ourTeam}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {t.ourTeamText.map((data, index) => (
              <AboutTeamItem
                key={index}
                img={data.img}
                heading={data.name}
                position={data.position}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
