import React from 'react';

function About(){
    return(
    <>
    <img class="img-fluid vh-100 vw-100" src="./assets/images/AdobeStock_190318318.jpeg" alt="gradeint background"/>
    <h1 id="hero1" class="text-center inline-flex position-absolute top-50 start-50 translate-middle">
        Hello I'm <br/> Misael Reyes
    </h1>
    <h1 id="hero2" class="text-center inline-flex position-absolute top-50 start-50 translate-middle">
        I'm a<br/>Web Developer
    </h1>
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