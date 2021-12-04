import React, { useHover } from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

const GridImage = () => {
    return(
        
    <Container class="p-0">
        <h4 class="w-100 text-center p-3 bg-warning">My Projects</h4>
        <Row class="px-1">
            <Col className="p-0 col-4">
                <Image className="img-fluid border border-danger" src={process.env.PUBLIC_URL + '/images/screenshotweather.PNG'}  />
                <div class="overly-img card-img-overlay text-white d-flex justify-content-center align-items-end">
                    <p class="hidden text-reveal">Corinna Kopf</p>
                </div>
            </Col>
            <Col className="p-0 col-4">
                <Image className="img-fluid border border-danger" src= {process.env.PUBLIC_URL + '/images/passgen.png'} />
                <div class="overly-img card-img-overlay text-white d-flex justify-content-center align-items-end">
                    <p class="hidden text-reveal">Corinna Kopf</p>
                </div>
            </Col>
            <Col className="p-0 col-4">
                <Image className=" img-fluid border border-danger" src={process.env.PUBLIC_URL + '/images/calendar_screenshot.png'} />
                <div class="overly-img card-img-overlay text-white d-flex justify-content-center align-items-end">
                    <p class="hidden text-reveal">Corinna Kopf</p>
                </div>
            </Col>
            <Col className="p-0 col-4">
                <Image className="img-fluid border border-danger" src= {process.env.PUBLIC_URL + '/images/passgen.png'} />
                <div class="overly-img card-img-overlay text-white d-flex justify-content-center align-items-end">
                    <p class="hidden text-reveal">Corinna Kopf</p>
                </div>
            </Col>
            <Col className="p-0 col-4">
                <Image className=" img-fluid border border-danger" src={process.env.PUBLIC_URL + '/images/calendar_screenshot.png'} />
                <div class="overly-img card-img-overlay text-white d-flex justify-content-center align-items-end">
                    <p class="hidden text-reveal">Corinna Kopf</p>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default GridImage;