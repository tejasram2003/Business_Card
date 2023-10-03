import React from "react";
import twitter from "./images/twitter.png"
import youtube from "./images/youtube.png"
import github from "./images/github.png"
import instagram from "./images/insta.png"

function Footer() {
    return (
        <div className="FooterContainer">
            <div className="Footer">
                <div className="icon">
                    <a href="https://instagram.com/real_d_btr">
                    <img src={instagram} alt="instagram" /></a>
                </div>
                <div className="icon">
                    <a href="https://github.com/tejasram2003">
                    <img src={github} alt="github" />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.youtube.com/@btr-music">
                    <img src={youtube} alt="youtube" /></a>
                </div>
                <div className="icon">
                    <a href="https://twitter.com/_btrmusic">
                    <img src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;