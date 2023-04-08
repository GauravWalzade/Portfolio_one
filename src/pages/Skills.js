import React from "react";
import { ProgressBar, ListGroup } from "react-bootstrap";

const Skills = () => {
  return (
    <div id="Skills" className="Skills pt-5 pb-5" style={{ backgroundColor: '#dcc6e0'}}>
      <div className="container">
        <h3 className="text-center text-uppercase">S-K-I-L-L-S</h3>
        <div className="row">
          <div className="col-md-6 pt-5 text-center" data-aos="fade-right">
            <img
              className="section_image"
              src={process.env.PUBLIC_URL + "images/skillnew.png"}
              alt="..."              
            />
          </div>
          <div className="col-md-6 pt-5" data-aos="fade-left" style={{justifyContent:"left",alignContent:"center"}}>
            <ListGroup as="ul"variant="flush">
              <ListGroup.Item  className="progress_list mt-5"  as="li">  
               <ProgressBar  animated label={`HTML`} variant="success" now={75} />
              </ListGroup.Item>
              <ListGroup.Item className="mt-3 progress_list" >
               <ProgressBar animated label={`CSS`} variant="success" now={45} />
              </ListGroup.Item>
              <ListGroup.Item  className="mt-3 progress_list" >
               <ProgressBar animated label={`JAVA SCRIPT`} variant="success" now={65} />
              </ListGroup.Item>
              <ListGroup.Item className="mt-3 progress_list" >
                <ProgressBar animated now={75} >
                  <ProgressBar animated variant="success" label={`REACT JS`} now={55}></ProgressBar>
                  <ProgressBar animated variant="warning" label={`REACT NATIVE`} now={40}></ProgressBar>
                </ProgressBar>
              </ListGroup.Item>
              <ListGroup.Item className="mt-3 progress_list">
               <ProgressBar animated label={`NODE JS`} variant="success" now={65} />
              </ListGroup.Item>
              <ListGroup.Item className="mt-3 progress_list" >
                <ProgressBar animated now={75} >
                  <ProgressBar animated  label={`MONGODB`} variant="success" now={55}></ProgressBar>
                  <ProgressBar animated label={`POSTGRE SQL`} variant="warning" now={40}></ProgressBar>
                </ProgressBar>
              </ListGroup.Item>
              <ListGroup.Item className="mt-3 progress_list"  >
               <ProgressBar animated now={75} >
                  <ProgressBar animated label={`WORDPRESS CMS`} variant="success" now={55}></ProgressBar>
                  <ProgressBar animated variant="warning" label={`SANITY`} now={40}></ProgressBar>
                </ProgressBar>
              </ListGroup.Item>
              <ListGroup.Item className="mt-3 progress_list"  >
               <ProgressBar >
                <ProgressBar animated label={`FIGMA`} variant="success" now={40}></ProgressBar>
                <ProgressBar animated label={`WEBFLOW`}  variant="warning" now={40}></ProgressBar>
               </ProgressBar>
              </ListGroup.Item>  
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
