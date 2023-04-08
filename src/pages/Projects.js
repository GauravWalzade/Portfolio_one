import React,{useState} from "react";
import { Card } from "react-bootstrap";
import { MyProjects } from "../data/data";
const Projects = () => {
  const [Projects, setProjects] = useState(MyProjects)
  const items =["all","figma","wordpress","reactjs","reactnative","sanity","nodejs"]
  
  const filterItems=(categoryItem)=>{
     if(categoryItem === 'all'){
       setProjects(MyProjects);
     }
     else{
      const updateProjects = MyProjects.filter((currentProject)=>{
        return currentProject.category === categoryItem;
     }) 

     setProjects(updateProjects);
     }
     
  }
  return (
    <div id="Projects" className="projects pt-5 pb-5" style={{ backgroundColor: '#c9f29b'}}>
      <div className="container">
       <h3 className="text-center text-uppercase">P-r-o-j-e-c-t-s</h3>
       <div className="category text-center mt-3">
          {
            items.map((item,i)=>{
            return (  
                  <span className="btn btn-success mx-2 my-2 text-uppercase" onClick={()=>filterItems(item)} key={i}>{item}</span>
              )
            })
          }
        </div>
        <div className="row mt-3" data-aos="fade-up">
        
          {Projects.map((project,i)=>(
             <div className="col-md-4 mt-5" key={project.id}>
             <Card className="text-center">
               <Card.Img variant="top" style={{height:"18rem"}} src={process.env.PUBLIC_URL + project.img_url} />
               <p className="text-uppercase pt-3 text-lg">{project.title}</p>
             </Card>
           </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
