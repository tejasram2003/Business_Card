import React from "react";
import ProfilePic from "./images/pro-pic.jpg"

function Picture() {
    return (
        <div className="Picture">
            <img src={ProfilePic} alt="Profile" />
        </div>
    )
}

export default Picture;