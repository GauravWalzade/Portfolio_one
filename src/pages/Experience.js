import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import {Experiences} from "./../data/data";

const Experience = () => { 
  return (
    <div
      id="Experince"
      className="experience pt-5 pb-5"
      style={{ backgroundColor: "#AFDEE5" }}
    >
      <div className="container">
        <h3 className="text-center text-uppercase">E-x-p-e-r-i-e-n-c-e</h3>
        <div className="row">
          <div className="col-md-6" data-aos="fade-right">
            <Tabs
              defaultActiveKey="First"
              id="uncontrolled-tab-example"
              className="pt-5"
            >
                {Experiences.map((Experience,i)=>(
                    <Tab key={i} eventKey={Experience.key} title={Experience.title}>
                    <p>Title&nbsp;:-{Experience.title} ({Experience.Year})</p>
                    <p>Orgnization&nbsp;:-{Experience.orgnization}</p>
                    <p className="pt-3" style={{height:"20rem",overflowY:"scroll"}}>{Experience.Description}</p>
                    </Tab>
                ))}
              
            </Tabs>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              className="section_image"
              src={process.env.PUBLIC_URL + "images/newexperience.png"}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
