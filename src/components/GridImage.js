import React, { useState, useEffect, useRef } from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

const mouseOverHandler = (e) => {
    const card = e.target.parentElement.lastElementChild;
    card.className="card-img-overlay bg-light text-center"
    for (let i = 0; i < card.childNodes.length; i++) {
        card.childNodes[i].className="card-text p-1"
    }
}
const mouseOutHandler = (e) =>{
    const card = e.target
    if (card.element="div"){
        card.className="hidden"
    }
}
const GridImage = () => {


    return(
    <Container fluid>
        <h4 class="w-100 text-center navbar p-3 bg-dark text-white">My Projects</h4>
        <Row class="">
            <Col lg={4} md={6} sm={12} className="p-0   card" >
                <Image className="img-fluid card-img"  onMouseOver={mouseOverHandler} src={process.env.PUBLIC_URL + '/images/WeatherDash.PNG'} />
                <div class="hidden " onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text">Weather Dashboard</h5>
                    <p class="card-text">Weather dashboard web application that displays current forecast and daily forecast.</p>
                    <a class="card-text p-1" href="https://github.com/missile11011/WeatherDash" target="_blank">GitHub</a>
                    <a class="card-text p-1" href="https://missile11011.github.io/WeatherDash/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0  card">
                <Image onMouseOver={mouseOverHandler}  className="img-fluid card-img" src= {process.env.PUBLIC_URL + '/images/ReduxStore.png'} />
                <div class="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text p-1">Redux Shop</h5>
                    <p class="card-text p-1">An e-commerce site using react and redux.</p>
                    <a class="card-text p-1" href="https://github.com/missile11011/ReduxStore" target="_blank">GitHub</a>
                    <a class="card-text p-1" href="https://redux-shop-51615.herokuapp.com/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0  card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Booksearch.png'} />
                <div class="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text p-1">Book Search</h5>
                    <p class="card-text p-1">Searchs for books and save them for later.</p>
                    <a class="card-text p-1" href="https://github.com/missile11011/book_search" target="_blank">GitHub</a>
                    <a class="card-text p-1" href="https://book-search-25563.herokuapp.com/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Password.png'} />
                <div class="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text p-1">Password Generator</h5>
                    <p class="card-text p-1">This application creates a random password with certain parameters.</p>
                    <a class="card-text p-1" href="https://github.com/missile11011/PasswordGenerator" target="_blank">GitHub</a>
                    <a class="card-text p-1" href="https://missile11011.github.io/PasswordGenerator/" target="_blank">Project</a>
                </div>
            </Col>                      
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Budget.png'} />
                <div class="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text p-1">Budget Tracker</h5>
                    <p class="card-text">This tracks your budget, and helps helps you keep track of your spending habits.</p>
                    <a class="card-text p-1" href="https://github.com/missile11011/BudgetTracker" target="_blank">GitHub</a>
                    <a class="card-text p-1" href="https://budget-84554.herokuapp.com/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Password.png'} />
                <div className="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 className="card-text p-1">Password Generator</h5>
                    <p className="card-text">This web application generates a password for you. It creates a random password with certain parameters.</p>
                    <a className="card-text p-1" href="https://github.com/missile11011/PasswordGenerator" target="_blank">GitHub</a>
                    <a className="card-text p-1" href="https://missile11011.github.io/PasswordGenerator/" target="_blank">Project</a>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default GridImage;