import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";



const GridImage = () => {
    const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
        const mobileSupport=()=>{
            if (window.innerWidth < 768) {
                setIsMobile(true);
                console.log(isMobile)
                const target = window.document.querySelectorAll("div.card");
                for (let i = 0; i < target.length; i++) {
                    target[i].lastChild.className = "bg-dark text-center text-white bg-opacity-75 card-body";
                }
            }
            else{
                setIsMobile(false);
                console.log(isMobile)
                const target = window.document.querySelectorAll("div.card");
                for (let i = 0; i < target.length; i++) {
                    target[i].lastChild.className = "hidden";
                }
            }
        };
        window.addEventListener("resize", mobileSupport);
        mobileSupport()
	}, [isMobile]);
    const mouseOverHandler = (e) => {
        const card = e.target.parentElement.lastElementChild;
        
        if (isMobile == false){
            card.className = "card-img-overlay bg-light text-center";
                card.childNodes[0].className = "card-text p-1";
                card.childNodes[1].className = "card-text p-1";
                card.childNodes[2].className = "btn btn-primary m-1";
                card.childNodes[3].className = "btn btn-primary m-1";
            
        }
    };
    const mouseOutHandler = (e) => {
        const card = e.target;
        if (isMobile == false) {
            card.className = "hidden";
        }
    };
    return(
    <Container fluid>
        <h4 class="text-center p-3 bg-dark text-white align-items-center navbar-text ">My Projects</h4>
        <Row class="">
            <Col lg={4} md={6} sm={12} className="p-0 card" >
                <Image className="img-fluid card-img"  onMouseOver={mouseOverHandler} src={process.env.PUBLIC_URL + '/images/WeatherDash.png'} />
                <div class="bg-dark text-center bg-opacity-25 card-body" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text">Weather Dashboard</h5>
                    <p class="card-text">Weather dashboard web application that displays current forecast and daily forecast.</p>
                    <a class="btn btn-primary m-1" href="https://github.com/missile11011/WeatherDash" target="_blank">GitHub</a>
                    <a class="btn btn-primary m-1" href="https://missile11011.github.io/WeatherDash/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0  card">
                <Image onMouseOver={mouseOverHandler}  className="img-fluid card-img" src= {process.env.PUBLIC_URL + '/images/ReduxStore.PNG'} />
                <div class="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text p-1">Redux Shop</h5>
                    <p class="card-text p-1">An e-commerce site using react and redux.</p>
                    <a class="btn btn-primary m-1" href="https://github.com/missile11011/ReduxStore" target="_blank">GitHub</a>
                    <a class="btn btn-primary m-1" href="https://redux-shop-51615.herokuapp.com/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0  card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Booksearch.PNG'} />
                <div class="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text p-1">Book Search</h5>
                    <p class="card-text p-1">Searchs for books and save them for later.</p>
                    <a class="btn btn-primary m-1" href="https://github.com/missile11011/book_search" target="_blank">GitHub</a>
                    <a class="btn btn-primary m-1" href="https://book-search-25563.herokuapp.com/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/DemoStore.png'} />
                <div class="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text p-1">Password Generator</h5>
                    <p class="card-text p-1">This web application is a modern e-commerce store</p>
                    <a class="btn btn-primary m-1" href="https://github.com/missile11011/E-commerce_Demo" target="_blank">GitHub</a>
                    <a class="btn btn-primary m-1" href="https://demo-store-23394.herokuapp.com/" target="_blank">Project</a>
                </div>
			</Col>  
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Budget.png'} />
                <div class="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 class="card-text p-1">Budget Tracker</h5>
                    <p class="card-text">This tracks your budget, and helps helps you keep track of your spending habits.</p>
                    <a class="btn btn-primary m-1" href="https://github.com/missile11011/BudgetTracker" target="_blank">GitHub</a>
                    <a class="btn btn-primary m-1" href="https://budget-84554.herokuapp.com/" target="_blank">Project</a>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-0 card">
                <Image className="img-fluid card-img" onMouseOver={mouseOverHandler} src= {process.env.PUBLIC_URL + '/images/Password.png'} />
                <div className="hidden" onMouseLeave={mouseOutHandler} >
                    <h5 className="card-text p-1">Password Generator</h5>
                    <p className="card-text">This application creates a random password with certain parameters.</p>
                    <a className="btn btn-primary m-1" href="https://github.com/missile11011/PasswordGenerator" target="_blank">GitHub</a>
                    <a className="btn btn-primary m-1" href="https://missile11011.github.io/PasswordGenerator/" target="_blank">Project</a>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default GridImage;