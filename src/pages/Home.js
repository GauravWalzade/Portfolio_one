import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import { Button } from 'react-bootstrap';
import { AiOutlineDownload } from "react-icons/ai"

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  const image = process.env.PUBLIC_URL + 'images/back.jpg'
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <img src={image} id='Home' className="home_back" alt="home_back_image" />
      <div className='hero' ref={myRef} style={{ height: "100vh", opacity: '0.7', backgroundColor: "none" }}>
        <div className="container text-center" >
          <h1 className='glow'>Gaurav Walzade.</h1>
          <p style={{color:"#fff"}}>Software developer with mern stack.</p>
          <Button href={process.env.PUBLIC_URL + 'images/cv.pdf'} download="cv.pdf" variant="outline-success" className='me-3' style={{color:"#fff"}}>DOWNLOAD &nbsp;<AiOutlineDownload /></Button>{' '}
          <a className='btn btn-success' href='/#contact' variant="outline-success" >HIRE ME</a>{' '}
        </div>
      </div>
    </>
  )
}

export default Home