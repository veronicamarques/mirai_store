import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/index";
import Carousel from 'react-bootstrap/Carousel';
import { default as Slider1 } from "../../assets/img/slider1.png";
import { default as Slider2 } from "../../assets/img/slider2.png";
import { default as Slider3 } from "../../assets/img/slider3.png";
import { default as Slider4 } from "../../assets/img/slider4.png";
import { default as Slider5 } from "../../assets/img/slider5.png";

function Home() {
  return (
    <>
    <Navbar />
    <div>
      <Carousel fade>
        <Carousel.Item style={{'height':"300px"}}>
          <img className="d-block w-100" src={Slider1} style={{'height':"300px"}} alt="" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider2} alt="" />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider3} alt="" />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider4} alt="" />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider5} alt="" />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
