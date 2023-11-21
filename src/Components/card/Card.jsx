import "./card.css";
import kasa from "../../assets/Kasa-desktop2.png";
import argentBank from "../../assets/ArgentBank-desktop2.png";
import { SocialIcon } from "react-social-icons";

const Card = ({alt,urlSource,titleCard,descriptionCard}) => {
 

  return (
    
     
      <div className="card-test">
        
        <img className ="card-img" alt={alt }src={urlSource}/>
        <div className="trait"></div>
        <p className="title-card">{titleCard}</p>
        <p className="description-card>">{descriptionCard}</p>
        <div className="iconStyleCard">
        <SocialIcon
          key="GitHub"
          className="iconStyleCard"
          url="https://github.com/DaniMeyl/Kasa"
          network="github"
          bgColor="black"
          target="_blank"
          rel="noopener"
        />
        </div>

      </div>
   
  );
};

export default Card;
