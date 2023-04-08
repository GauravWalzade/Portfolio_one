import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    const public_key='lL3xa5eyEYBAVNkKc';
   await emailjs.sendForm('service_vly4osk', 'template_yhihyd8',form.current, public_key)
      .then((result) => {
          toast("Email send Successfully!")
      }, (error) => {
          toast("Unable to send email")
      });
  };
  return (
    <div id="Contact" className="contact pt-5 pb-5" style={{ backgroundColor: "#fffc7f",overflowX:"hidden" }}>
      <div className="container">
        <h3 className="text-center text-uppercase">C-o-n-t-a-c-t</h3>
        <ToastContainer/>
        <div style={{ margin: "auto", width: "80%" }} data-aos="fade-up">
          <Form className="pt-5" ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Control
                type="name"
                style={{
                  borderBottom: "2px solid #000",
                  borderTop: "none",
                  borderRight: "none",
                  backgroundColor: "transparent",
                  color: "#000",
                  borderLeft: "none",
                  borderRadius: "0px",
                }}
                placeholder="Enter name"
                name="user_name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                style={{
                  borderBottom: "2px solid #000",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderRadius: "0px",
                  backgroundColor: "transparent",
                  color: "#000",
                }}
                placeholder="Enter Email"
                name="user_email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="mobile"
                style={{
                  borderBottom: "2px solid #000",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderRadius: "0px",
                  backgroundColor: "transparent",
                  color: "#000",
                }}
                placeholder="Enter mobile"
                name="user_mobile"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                className="pb-0"
                style={{
                  borderBottom: "2px solid #000",
                  borderTop: "none",
                  borderRight: "none",
                  resize:"none",
                  borderLeft: "none",
                  borderRadius: "0px",
                  backgroundColor: "transparent",
                  color:"#000",
                }}
                rows="10"
                type="message"
                name="user_message"
                placeholder="Enter Message"
              />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outline-success" type="submit">
                <span style={{color:"#000"}}>SEND</span>
              </Button>
            </div>
          </Form>  
        </div>
      </div>
    </div>
  );
};
export default Contact;
