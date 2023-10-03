import React from "react";
import Interests from "./Interests";


function EmailButton() {
    const emailAddress = "tejasram03@gmail.com"; // Replace with your email address
  
    const handleEmailClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };
  
    return (
      <button className="email-button" onClick={handleEmailClick}>
        Email me
      </button>
    );
  }
  

function About() {
    return (
        <div className="about-container">
            <div className="about">
                <h1>Tejasram</h1>
                <h4>Full Stack/ML Developer</h4>
                <a className="github-link" href="https://github.com/tejasram2003">Github Profile</a>
                <div className="buttons">
                <EmailButton />
                <a className="linkedin-button" href="https://www.linkedin.com/in/tejasram-b-59792827b/">Linkedin</a>
                </div>
                <h3>About</h3>
                <p>Hello! I'm an AI & Data Science student in my pre-final year, exploring the fascinating world of artificial intelligence as a Machine Learning Engineer and a FullStack Developer.</p>
                <Interests />
            </div>
        </div>
    )
}

export default About;