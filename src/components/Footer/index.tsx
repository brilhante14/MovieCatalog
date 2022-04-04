import React from "react";

import {
	AiFillGithub,
	AiOutlineInstagram
} from 'react-icons/ai'

import { FaLinkedinIn } from 'react-icons/fa'

import "./styles.css";

import Logo from "../../assets/copyright-logo.svg";

const Footer = () => {
   return(
      <div className="footer-container">
    
      <div className="icons">
            <a className="icon"
					href="https://www.instagram.com/brilhante.gabriel_/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineInstagram color="white" size="2em"/>
				</a>
				<a className="icon"
					href="https://github.com/brilhante14"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillGithub color="white" size="2em" />
				</a>
				<a className="icon"
					href="https://www.linkedin.com/in/gabriel-brilhante-4485b0223/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedinIn color="white" size="2em" />
				</a>
      </div>

      <p style={{padding: "1rem 0"}}>Developed by Gabriel Brilhante</p>
		<p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
         
      <div className="copyright">
         <img src={Logo} alt="The Movie DB logo" /> 
      </div>
      </div>
   )
}

export default Footer;