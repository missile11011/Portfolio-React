import React from 'react';

function Header(){
    return(
    <>
    <nav class="navbar border-bottom navbar-expand-lg sticky-top container-fluid bg-black">
        <button class="navbar-toggler btn btn-dark p-2" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            Menu
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto m-auto py-3">
                <li class="">
                    <a class="p-5 mb-2 text-white text-decoration-none" href="#">Home</a>
                </li>
                <li class="">
                    <a class="p-5 mb-2 text-white text-decoration-none" href="#Portfolio">Work</a>
                </li>
                <li>
                    <a class="p-5 mb-2 text-white text-decoration-none" href="#About-me">About</a>
                </li>
                <li>
                    <a class="p-5 mb-2 text-white text-decoration-none" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="collapse navbar-collapse fs-1 bg-light text-center" id="navbarSupportedContent">
        <ul class="navbar-nav ">
            <li class="">
                <a class=" p-5 mb-2 text-dark text-decoration-none" href="#">Home</a>
            </li>
            <li class="">
                <a class=" p-5 mb-2 text-dark text-decoration-none" href="#Portfolio">Works</a>
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