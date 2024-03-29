import React from 'react';

function Contact(){
    return(
    <section id="Contact" class="container-fluid">
        <div class=" text-center">
            <h2 class="text-center my-5">My Resume</h2>
        <a class="btn rounded-pill primary-color btn-lg px-5" href={process.env.PUBLIC_URL + '/GeneralResume.pdf'}>Resume PDF</a>
        </div>
        
        <h2 class="text-center my-5">
            Get in touch
        </h2>
        <ul class="row mb-5 list-unstyled">
            <li class='col text-center '>
                <h4>Phone</h4>
                <p>(469)428-4698</p>
            </li>
            <li class='col text-center'>
                <h4>Email</h4>
                <a class="btn shadow primary-color"
                    href="mailto:misaelrey90@gmail.com">misaelrey90@gmail.com</a>

            </li>
            <li class="col text-center">
                <h4>Github</h4>
                <a class="btn shadow primary-color"
                    href="https://github.com/missile11011/portfolio">github.com/missile11011</a>
            </li>
            <li class="col text-center">
                <h4>LinkedIn</h4>
                <a class="btn shadow primary-color"
                    href="https://linkedin.com/in/misael-reyes-aba129191">linkedin.com</a>
            </li>
        </ul>
    </section>
    )
};

export default Contact;