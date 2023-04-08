import React ,{useState} from "react";
import { Button } from "react-bootstrap";
import {contacts,links} from "./../data/data.js";
import PrivacyPolicy from "../pages/PrivacyPolicy.js";
import  {Link}  from "react-router-dom";
import {Link as Scroll}  from "react-scroll";


const Footer = () => {
const resources=["Privacypolicy","Sitemap","Faq"];
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);


const d = new Date();
let year = d.getFullYear();
return (
    <>
    <footer >
      <div className="container">
        <div className="row">
          <div className="col-md-5 pt-5"> 
            <h2 className="">Gaurav Walzade</h2>
            <Button className="mt-2" variant="outline-success">Hire me</Button>
          </div>
          <div className="footer-col col-md-2">
            <ul className="list-group mt-5">
              <h4 className="list-group-item">Quick Links</h4>
               {links.map((link,i)=>(
                 <li key={i} className="list-group-item" ><Scroll spy={true} smooth={true} offset={-50} duration={500} to={link}>{link}</Scroll></li>
               ))}
            </ul>
          </div>
          <div className="col-md-2 mt-5">
            <ul className="list-group">
              <h4 className="list-group-item" >Resource</h4>
              {resources.map((resource,i)=>(
                (resource === "Privacypolicy")?<li key={i} className="list-group-item" ><Link to="/" onClick={()=>setShow(true)}>{resource}</Link></li> :
                <li key={i} className="list-group-item" ><Link to={resource}>{resource}</Link></li>
               ))}
            </ul>
          </div>
          <div className="col-md-3 mt-5">
            <ul className="list-group">
              <h4 className="list-group-item" >Visit Us</h4>
              {contacts.map((contact,i)=>(
                  <li key={i} className="list-group-item " ><p>{contact}</p></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="container">
        <div className="row copyright">
          <p>&copy;&nbsp;{year}</p>
        </div>
      </div>
     
    </footer>
    <PrivacyPolicy show={show} close={handleClose}/>
    
    </>
  );
};

export default Footer;
