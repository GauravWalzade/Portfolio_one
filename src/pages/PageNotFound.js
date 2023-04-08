import React from 'react'

const PageNotFound = () => {
  return (
    <div className='PageNotFound' style={{height:"100vh",backgroundColor:"#ecf0f1"}}>
      <div className="container text-center">
        <img src={process.env.PUBLIC_URL + "images/trans_error.png"} style={{height:"500px",width:"50vw",marginTop:"20vh"}} alt="" />   
      </div>
    </div>
  )
}

export default PageNotFound