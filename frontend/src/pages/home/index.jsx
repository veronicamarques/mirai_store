import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/index";
import Carousel from 'react-bootstrap/Carousel';
import "./styles.css";
import { default as Slider1 } from "../../assets/img/slider1.png";
import { default as Slider2 } from "../../assets/img/slider2.png";
import { default as Slider3 } from "../../assets/img/slider3.png";
import { default as Slider4 } from "../../assets/img/slider4.png";
import { default as Slider5 } from "../../assets/img/slider5.png";
import { default as heart } from "../../assets/img/heart.png";
import { default as support } from "../../assets/img/support.png";
import { default as box } from "../../assets/img/box.png";
import { default as payment } from "../../assets/img/payment.png";

function Home() {
  return (
    <>
    <Navbar />
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider1} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider2} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider3} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider4} alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Slider5} alt="" />
        </Carousel.Item>
      </Carousel>

      <div id="info-container">
        <div className="row">
          <div className="div-info col-lg-6 col-xl-3 col-md-6 col-sm-12 col-xs-12">
            <div className="div-img">
              <img src={box} alt=""></img>
            </div>
            <div className="div-text">
              <strong>Frete Grátis</strong>
              <br />
              <div>Nosso envio é <b>grátis</b> pelos Correios <b>para todo o Brasil</b> com Código de Rastreio, sem taxas surpresas ao receber.</div>
            </div>
          </div>
          <div className="div-info col-lg-6 col-xl-3 col-md-6 col-sm-12 col-xs-12">
            <div className="div-img">
              <img src={heart} alt=""></img>
            </div>
            <div className="div-text">
              <strong>Compra Garantida</strong>
              <br />
              <div>Receba o produto ou nossa equipe devolverá todo seu dinheiro de volta na sua conta em poucos minutos.</div>
            </div>
          </div>
          <div className="div-info col-lg-6 col-xl-3 col-md-6 col-sm-12 col-xs-12">
            <div className="div-img">
              <img src={support} alt=""></img>
            </div>
            <div className="div-text">
              <strong>Suporte Rápido</strong>
              <br />
              <div>Atendimento todos os dias das <b>10:00</b> às <b>22:00 via WhatsApp</b>.</div>
            </div>
          </div>
          <div className="div-info col-lg-6 col-xl-3 col-md-6 col-sm-12 col-xs-12">
            <div className="div-img">
              <img src={payment} alt=""></img>
            </div>
            <div className="div-text">
              <strong>Pagamento Seguro</strong>
              <br />
              <div>Ambiente fortemente seguro para pagamentos no <b>Cartão de Crédito, Boleto Bancário</b> e <b>PIX</b>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
