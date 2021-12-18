import React, { useState, useEffect, useRef } from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

const mouseOverHandler = (e) => {
    const border = e.target.parentElement.lastElementChild;
    border.className="card-img-overlay bg-light text-center"
}
const mouseOutHandler = (e) =>{
    const border = e.target
    border.className="hidden"
}
const GridImage = () => {


    return(
    <Container fluid>
        <h4 class="w-100 text-center navbar p-3 bg-dark text-white">My Projects</h4>
        <Row class="">
            <Col lg={4} md={6} sm={12} className="p-0   card" >
                <Image className="img-fluid card-img"  onMouseOver={mouseOverHandler} src={process.env.PUBLIC_URL + '/images/WeatherDash.PNG'} />
                <div className="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-title">Weather Dashboard</h5>
                    <p class="card-text">Weather dashboard web application that displays current forecast and daily forecast</p>
                    <a class="card-link" href="https://github.com/missile11011/WeatherDash" target="_blank">GitHub</a>
                    <a class="card-link" href="https://missile11011.github.io/WeatherDash/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0  card">
                <Image onMouseOver={mouseOverHandler}  className="img-fluid card-img" src= {process.env.PUBLIC_URL + '/images/ReduxStore.png'} />
                <div className="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-title">Book Search</h5>
                    <p class="card-text">Searchs for books and save them for late </p>
                    <a class="card-link" href="https://github.com/missile11011/ReduxStore" target="_blank">GitHub</a>
                    <a class="card-link" href="https://redux-shop-51615.herokuapp.com/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0  card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Booksearch.png'} />
                <div className="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-title">Book Search</h5>
                    <p class="card-text">Searchs for books and save them for late </p>
                    <a class="card-link" href="https://github.com/missile11011/book_search" target="_blank">GitHub</a>
                    <a class="card-link" href="https://book-search-25563.herokuapp.com/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Password.png'} />
                <div className="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-title">Password Generator</h5>
                    <p class="card-text">This web application generates a password for you. It creates a random password with certain parameters.</p>
                    <a class="card-link" href="https://github.com/missile11011/PasswordGenerator">GitHub</a>
                    <a class="card-link" href="https://missile11011.github.io/PasswordGenerator/">Project</a>
                </div>
            </Col>                      
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Budget.png'} />
                <div className="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-title">Budget Tracker</h5>
                    <p class="card-text">This tracks your budget, and helps helps you keep track of your spending habits.</p>
                    <a class="card-link" href="https://github.com/missile11011/BudgetTracker">GitHub</a>
                    <a class="card-link" href="https://budget-84554.herokuapp.com/">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Password.png'} />
                <div className="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-title">Password Generator</h5>
                    <p class="card-text">This web application generates a password for you. It creates a random password with certain parameters.</p>
                    <a class="card-link" href="https://github.com/missile11011/PasswordGenerator">GitHub</a>
                    <a class="card-link" href="https://missile11011.github.io/PasswordGenerator/">Project</a>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default GridImage;