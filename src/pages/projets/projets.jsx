import "./projet.css";
import kasa from "../../assets/Kasa-desktop2.png";
import argentBank from "../../assets/ArgentBank-desktop2.png";
import Card from "../../Components/card/Card";
import eventImg from "../../assets/event.png";

const Projets = () => {
  return (
    <div className="container-projet">
      <Card
        alt="site internet kasa"
        urlSource={kasa}
        titleCard="Kasa"
        descriptionCard="Implémentation du front-end d’une application de location immobilière en utilisant React, Sass et des animations CSS"
        urlGit="https://github.com/DaniMeyl/Kasa"
      />
      <Card
        alt="site internet 724event"
        urlSource={eventImg}
        titleCard="724event"
        descriptionCard="Implémentation du front-end d’une application bancair en utilisant React, Redux et configuration de route API"
        urlGit="https://github.com/DaniMeyl/724events"
      />
      <Card
        alt="site internet d'argentBank"
        urlSource={argentBank}
        titleCard="ArgentBank"
        descriptionCard="Implémentation du front-end d’une application bancaire en utilisant React, Redux et une configuration de route API"
        urlGit="https://github.com/DaniMeyl/argentBank"
      />
    </div>
  );
};

export default Projets;
