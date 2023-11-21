import "./home.css";
import Typewriter from "typewriter-effect";
import Social from "../../Components/social/Social";
import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <div className="home-container">
     
        
          <h1 className="home-name">Dani Meylemans</h1>
          <div className="home-text-container">
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: [" Developpeur Front-End Junior"],
              }}
            />
          </div>
          
        
        <Player
          src="https://assets6.lottiefiles.com/packages/lf20_pwohahvd.json"
          className="player"
          loop
          autoplay
          style={{ maxHeight: "400px", maxWidth: "400px" }}
        />
        <Social className="social" />
     
    </div>
  );
};

export default Home;
