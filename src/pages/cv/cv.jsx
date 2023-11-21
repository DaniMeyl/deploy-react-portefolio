import cv from "../../assets/CVnoir.png"
import "./cv.css"
const Cv= () => {
  
   
    return (
      <div className="container-cv">
       <img className="cv"src={cv} alt="cv"></img>
       <section class="curved"></section>
      </div>
    );
  }
  


export default Cv