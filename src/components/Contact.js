import React from 'react';

function Contact(){
    return(
        <section id="Contact" class="container-fluid">
        <h2 class="text-center my-5">
            Get in touch
        </h2>
        <ul class="row mb-5">
            <li class='col text-center '>
                <h4>Phone Number</h4>
                <p>(123)456-7890</p>
            </li>
            <li class='col text-center'>
                <h4>Email</h4>
                <p>misaelrey90@gmail.com</p>
            </li>
            <li class="col text-center">
                <h4>Github</h4>
                <a class="text-decoration-none"
                    href="https://github.com/missile11011/portfolio">github.com/missile11011</a>
            </li>
        </ul>
    </section>
    )
};

export default Contact;