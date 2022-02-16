import React from "react";
import "./styles.css";
import { default as VisaCard } from "../../assets/img/visa.png";
import { default as Boleto } from "../../assets/img/boleto.png";
import { default as AmericanExpress } from "../../assets/img/americanexpress.png";
import { default as Hipercard } from "../../assets/img/hipercard.png";
import { default as MasterCard } from "../../assets/img/mastercard.png";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="list-unstyled">
              <h4>NewsLetter</h4>
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
          {/* Column2 */}
          <div className="col">
            <ui className="list-unstyled">

            </ui>
          </div>
        </div>
        <div className="row">
          <p className="col-sm text-center">
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