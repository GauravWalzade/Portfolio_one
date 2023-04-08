import React from "react";

const About = () => {
  return (
    <div id="About" className="About pt-5 pb-5" style={{ backgroundColor: '#ee82ee',height:"auto" }}>
      <div className="container">
        <h3 className="text-center text-uppercase">A-b-o-u-t</h3>
        <div className="row">
          <div className="col-sm-12 col-md-6 text-center" data-aos="fade-right">
            <img className="img-fluid section_image" src={process.env.PUBLIC_URL + `images/avtar one.png`} alt="" />
          </div>
          <div className="col-sm-12 col-md-6 pt-5" data-aos="fade-left">
              <h2>Gaurav Walzade</h2>
              <p>Mern Stack developer with 6 month of professional experience.I'm resposible to develope and maintain web app.Hand on experice on developing beautiful web app for client.Abality to learn new technology quickly and good team player .</p>
              <p>I am able to adapt any new technology as required to solve the peoblem.Good under staading of frontend framework like MUI,Bootrseap,Telwindcss and Antd etc Also able to work on react native like platform.Also able to work on figma.I also design adn develope worldclass wordpress cms projects.Able to work with backend with nodejs.</p>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default About;
