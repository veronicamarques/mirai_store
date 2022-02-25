import React from "react";
import "./styles.css";
import { default as VisaCard } from "../../assets/img/visa.png";
import { default as Boleto } from "../../assets/img/boleto.png";
import { default as AmericanExpress } from "../../assets/img/americanexpress.png";
import { default as Hipercard } from "../../assets/img/hipercard.png";
import { default as MasterCard } from "../../assets/img/mastercard.png";
import { default as Facebook } from "../../assets/img/facebook.png";
import { default as Instagram } from "../../assets/img/instagram.png";
import { default as Email } from "../../assets/img/envelope-fill.png";
import { default as Uni } from "../../assets/img/unicornio.png";
import { default as Uni2 } from "../../assets/img/unicornio2.png";
import { default as Uni3 } from "../../assets/img/unicornio3.png";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row all-visible">
          <div className="col desktop-visible">
            <h1 className="list-unstyled">
              <label className="label-commons" style={{fontSize:"20pt"}}>NewsLetter <img src={Uni3} style={{width:"30px",marginBottom:"6px"}} alt="" /></label>
              <form>
                <div className="row">
                  <div className="col col-footer">
                    <input type="text" className="form-control" placeholder="Nome" />
                  </div>
                  <div className="col col-footer">
                    <input type="email" className="form-control" placeholder="E-mail" />
                  </div>
                  <div className="col col-footer">
                    <button type="button" class="btn footer-btn-send">Enviar</button>
                  </div>
                </div>
              </form>
            </h1>
          </div>
          {/* Redes Sociais */}
          <div className="col text-center">
            <h1 className="list-unstyled">
              <label className="label-commons" style={{marginBottom:"0"}}>Redes Sociais <img src={Uni2} style={{width:"30px",marginBottom:"6px"}} alt="" /></label>
              <div>
                <img className="icons-social" src={Facebook} alt="Facebook" style={{marginRight:"12px"}}/>
                <img className="icons-social" src={Instagram} alt="Instagram" />
                <img className="icons-social" src={Email} alt="Email" style={{marginLeft:"17px"}}/>
              </div>
            </h1>          
          </div>
          {/* Contato */}
          <div className="col text-center">
            <h1 className="list-unstyled">
              <label className="label-commons">Contato <img src={Uni} style={{width:"30px", marginBottom:"6px"}} alt="" /></label>
              <hr className="linha-footer" />
              <p className="contato-footer"> (11) 6969-6969 | vendas@miraistore.com.br</p>
              <hr className="linha-footer" />
              <p></p>
              <hr className="linha-footer" />
              <p className="contato-footer"> Rua tal tal tal, 6969</p>
              <hr className="linha-footer" />
            </h1>          
          </div>
        </div>
        <div className="row desktop-visible">
          <p className="col-sm text-center ">
            <img className="icons-cards" src={VisaCard} alt="Visa" />
            <img className="icons-cards" src={Boleto} alt="Boleto" />
            <img className="icons-cards" src={AmericanExpress} alt="American Express" />
            <img className="icons-cards" src={Hipercard} alt="HiperCard" />
            <img className="icons-cards" src={MasterCard} alt="MasterCard" />
          </p>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm text-center">
            &copy;{new Date().getFullYear()} Mirai Store | Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;