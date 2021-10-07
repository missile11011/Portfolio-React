import React from 'react';

function Portfolio(){
    return(
        <>
        <div class="container-fluid bg-info">
        <h1 class="text-center text-white py-2 ">
            Portfolio
        </h1>
    </div>
    <div id="Portfolio" class="container-fluid bg-light">
        <div class=" w-100">
            <div class="col-xl-10 m-auto pt-4">
                <div class="card">
                    <div class="card-body border-1">
                        <h3 class="card-title">Weather Dashboard</h3>
                        <h5 class="card-title">About:</h5>
                        <p class="card-text">This is a weather dashboard web application that displays current forecast
                            and daily forecast. Type in the city you want to check then press the search button. You
                            will be presented with the city name temperature, weather conditions, wind speed, and
                            humidity for the current daily weather. And additionally, the UV index for the current
                            weather.</p>
                        <p class="fw-bold">Links:</p>
                        <a class="text-decoration-none" href="https://missile11011.github.io/WeatherDash/">Website</a>
                        <br/>
                        <a class="text-decoration-none" href="https://github.com/missile11011/WeatherDash">GitHub
                            repo</a>
                    </div>
                    <img src="assets/images/screenshotweather.PNG" class="card-img-bottom" alt="..."/>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-5 pt-4 card-group">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Password Generator</h3>
                            <h5 class="card-title">About</h5>
                            <p class="card-text">This web application generates a password for you. It creates a random
                                password with certain parameters. You will be promoted with a message asking for how
                                many characters you would like the password to be. Then you will be presented with
                                multiple parameters like if you want your password to include uppercase and or lowercase
                                and so on.</p>
                            <p class="fw-bold">Links:</p>
                            <a class="text-decoration-none"
                                href="https://missile11011.github.io/PasswordGenerator/">Website</a>
                            <br/>
                            <a class="text-decoration-none"
                                href="https://github.com/missile11011/PasswordGenerator">GitHub repo</a>
                        </div>
                        <img src="assets/images/passgen (2).PNG" class="card-img-bottom" alt="..."/>
                    </div>
                </div>
                <div class="col-xl-5 pt-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Scheduler</h3>
                            <h5 class="card-title">About</h5>
                            <p class="card-text">This web application is a calendar application that allows a user to
                                save events for each hour of the day. It does it by storing the data using localStorage.
                                It also displays the current date on top using moment.js.</p>
                            <p class="fw-bold">Links:</p>
                            <a class="text-decoration-none" href="https://missile11011.github.io/scheduler/">Website</a>
                            <br/>
                            <a class="text-decoration-none" href="https://github.com/missile11011/scheduler">GitHub
                                repo</a>
                        </div>
                        <img src="assets/images/schedulerSreenshot.jpeg" class="card-img-bottom" alt="..."/>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-5 pt-4 card-group">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Back End E-Commerce</h3>
                            <h5 class="card-title">About</h5>
                            <p class="card-text">This web application is a back end mockup for an e-commerce site. When
                                you open one of the GET routes api/categories, api/products, or api/tags you'll be
                                presented with a json file containg the data. in Insomnia Core you can use the same
                                routes above to POST, PUT, and DELETE using json.</p>
                            <p class="fw-bold">Links:</p>
                            <a class="text-decoration-none"
                                href="https://frozen-atoll-74009.herokuapp.com/">Website</a>
                            <br/>
                            <a class="text-decoration-none"
                                href="https://github.com/missile11011/Back_end-e-commerce">GitHub repo</a>
                        </div>
                        <img src="assets/images/backEndScreenshot.jpeg" class="card-img-bottom" alt="..."/>
                    </div>
                </div>
                <div class="col-xl-5 pt-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Scheduler</h3>
                            <h5 class="card-title">About</h5>
                            <p class="card-text">This web application is a calendar application that allows a user to
                                save events for each hour of the day. It does it by storing the data using localStorage.
                                It also displays the current date on top using moment.js.</p>
                            <p class="fw-bold">Links:</p>
                            <a class="text-decoration-none"
                                href="https://thawing-fjord-46654.herokuapp.com/login">Website</a>
                            <br/>
                            <a class="text-decoration-none"
                                href="https://github.com/Zd092718/businesscalendar">GitHub repo</a>
                        </div>
                        <img src="assets/images/calendar_screenshot.png" class="card-img-bottom" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
};

export default Portfolio;