const faqs=[{
    title:"what is purpose of this site?",
    eventKey:0,
    description:`To show my potential to employeer.I able to develope the application using technology i  mentioned in  my skill sets.`
  },{
    title:"Which technology behind this website ?",
    eventKey:1,
    description:`This is build on MERN STACK (Mongodb-Express-React-Nodejs).We also using few more packages to develope this site like vanta.js and aos.js.For design we use bootstap framework.For email i use email.js.`
  },{
    title:"Why SPA ?",
    eventKey:2,
    description:`It is trend topic in recent web development.And it also have advantages it doest not require to load whole page  each time.It behave like desktop application.`
  },{
    title:"Is this contact form working ?",
    eventKey:3,
    description:`I use email.js that able to send email from static sight.`
  }]

  const links =["Home","About","Experince","Skills","Projects","Contact","News"]

  const contacts=["Address  :Nashik-422003,Maharashtra,India","Phtitle  :+91 9168113096","Email : gauravwalzade1392@gmail.com"];

  const Experiences =[
    {
        title:"Ecommerce",
        key:"First",
        orgnization:"Freelancer",
        Year:"Aug-2022 to Jan-2022",
        Role:"Software Devloper",
        Description:"Understanding requirments and design solution suitable for our  client as per their requirment.In this we work using MERN Stack for devleopment. "
    },
    {
      title:"3D-Assets",
      key:"Second",
      orgnization:"Freelancer",
      Year:"Aug-2022 to Jan-2022",
      Role:"Software Devloper",
      Description:"Understanding requirments and design solution suitable for our  client as per their requirment.In this we work using MERN Stack for devleopment. "
    }
    
]

const MyProjects = [
     {"id":1,"category":"wordpress", "title":"Realestate", "img_url":"images/realestate.png"},
     { "id":2,"category":"wordpress","title":"Affiliate","img_url":"images/two.jpg"},
     {"id":3,"category":"wordpress","title":"Beauty","img_url":"images/three.jpg"},
     {"id":4,"category":"sanity","title":"Portfolio","img_url":"images/four.jpg"},
     {"id":5,"category":"sanity","title":"Ecommerce","img_url":"images/five.jpg"},
     {"id":6,"category":"figma","title":"Portfolio","img_url":"images/six.jpg"},  
     {"id":7,"category":"nextjs","title":"Ecommerce","img_url":"images/seven.jpg"},
     {"id":8,"category":"reactjs","title":"Ecommerce","img_url":"images/eight.jpg"},
     {"id":9,"category":"reactjs","title":"Dashboard","img_url":"images/one.jpg"},
    ]

  module.exports={faqs,links,contacts,Experiences,MyProjects}