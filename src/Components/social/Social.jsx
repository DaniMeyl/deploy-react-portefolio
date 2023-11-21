import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./Social.css"



function Social() {
 
  return (
    <div className="social">
      
        <SocialIcon
          key="GitHub"
          className="iconStyle"
          url="https://github.com/DaniMeyl"
          network="github"
          bgColor="black"
          target="_blank"
          rel="noopener"
        />
         <SocialIcon
          key="Email"
          className="iconStyle"
          url="mailto:dani.meylemans@gmail.com"
          network="email"
          bgColor="black"
          target="_blank"
          rel="noopener"
        />
      
    </div>
  );
}

export default Social;
