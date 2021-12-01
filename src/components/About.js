import React from 'react';
import background from "../images/AdobeStock_190318318.jpeg";
import { Image } from "react-bootstrap"
import "../index.css"
function About(){
    return(
    <>
    <img class="img-fluid w-100 vh-100 " src={ background } alt="gradeint background"/>
    <div class="overly-img card-img-overlay center-heroku ">
        <h1 id="hero1" class="line-1 m-auto align-items-center">
            Hello I'm Misael Reyes
        </h1>
        <br/>
        <h1 id="hero2" class="line-2 m-auto align-items-center">
            I'm a Web Developer
        </h1>
    </div>
    
    <article id="About-me" class=" flex-wrap row align-items-center justify-content-center container-fluid">
        <img id="portrait" class="rounded-circle col-md-3 py-3"
            src="https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif"
            alt="portrait picture"/>
        <div class="col-8">
            <h2 class="text-center inline-flex">
                About Me
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
    </article>
    </>
    )
};

export default About;