import { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {faqs} from "./../data/data.js";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <div style={{justifyContent:"center",alignContent:"center",height:"100vh",paddingTop:"25vh",backgroundColor:"#ecf0f1"}}>
      <div className="container "  id="faq">
        <h3 className='text-center'>F-A-Q</h3>
        <Accordion>
          {faqs.map((faq,i)=>(
            <Accordion.Item key={i} eventKey={faq.eventKey}>
            <Accordion.Header>{faq.title}</Accordion.Header>
            <Accordion.Body>
              {faq.description}
            </Accordion.Body>
          </Accordion.Item>
          ))}
          </Accordion>
      </div>
      </div> 
    </>
  )
}

export default Faq