import React from 'react';

function Header(){
    return(
    <>
    <nav class="navbar bg-transparent navbar-expand-lg position-absolute top-0 container-fluid">
        <button class="navbar-toggler btn btn-dark p-2" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            Menu
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="">
                    <a class=" p-3 mb-2 text-white text-decoration-none" href="#">Home</a>
                </li>
                <li class="">
                    <a class=" p-3 mb-2 text-white text-decoration-none" href="#Portfolio">Work</a>
                </li>
                <li>
                    <a class="p-3 mb-2 text-white text-decoration-none" href="#About-me">About</a>
                </li>
                <li>
                    <a class=" p-3 mb-2 text-white text-decoration-none" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="collapse navbar-collapse fs-1 bg-light text-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="">
                <a class=" p-5 mb-2 text-dark text-decoration-none" href="#">Home</a>
            </li>
            <li class="">
                <a class=" p-5 mb-2 text-dark text-decoration-none" href="#Portfolio">Work</a>
            </li>
            <li>
                <a class=" p-5 mb-2 text-dark text-decoration-none" href="#About-me">About</a>
            </li>
            <li>
                <a class=" p-5 mb-2 text-dark text-decoration-none" href="#Contact">Contact</a>
            </li>
        </ul>
    </div>
    </>
    )
}

export default Header;