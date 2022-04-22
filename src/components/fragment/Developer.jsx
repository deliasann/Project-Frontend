import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Instagram, LinkedIn, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>My Profile</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Adelia Sannomiya</h3>
                        <p>Frontend Developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>An Informatics Engineering Student at the Telkom Institute of Technology Purwokerto</p>
                    <p>A Frontend Developer.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://twitter.com/sannomyaxxx?s=09"}  title={"sannomyaxxx"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/adelia-sannomiya/"}  title={"adelia-sannomiya"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://instagram.com/deliasann/"}  title={"deliasann"}>
                            <Instagram/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;