import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import {links} from "./../data/data.js";


const Sitemap = () => {
  const link_second=["Privacy policy","Faq"]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='sitemap'  id='sitemap' style={{backgroundColor:"#ecf0f1"}}>
      <div className="container" >
      <div className="row" style={{justifyContent:"center",alignContent:"center",height:"100vh"}}>
        <h3 className='text-center'>S-I-T-E-M-A-P</h3>
            <div className="col-md-4 offset-md-1 mt-5">
              <ListGroup>
                <ListGroup.Item><h4>Important Links</h4></ListGroup.Item>
                {links.map((link,i)=>(
                     <ListGroup.Item key={i}><a  href="/">{link}</a></ListGroup.Item>
                ))}
              </ListGroup>
            </div>
            <div className="col-md-4 offset-md-1 mt-5">
              <ListGroup>
                <ListGroup.Item><h4>Resources</h4></ListGroup.Item>
                {link_second.map((link,i)=>(
                     <ListGroup.Item key={i}><a  href="/">{link}</a></ListGroup.Item>
                ))}
              </ListGroup>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap;