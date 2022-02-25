import React from "react";
import Navbar from "../../components/navbar";
import "./styles.css";

function CartPage() {
  return (
    <div>
      <Navbar />
      <section id="cart-container">
        <div id="payment-container">
          <div id="checkout-info">
            <h2>Resumo do Pedido</h2>
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              <p style={{ marginBottom: "5px" }}>1x Camiseta Geek</p>
              <p style={{ marginBottom: "5px" }}>1x Camiseta Geek</p>
              <p style={{ marginBottom: "5px" }}>1x Camiseta Geek</p>
            </div>
            <h3 style={{ float: "right" }}>R$20,00</h3>
            <h3>Total:</h3>
            <br />
            <button>
              <div>FINALIZAR COMPRA</div>
            </button>
            <p style={{ textAlign: "center", marginTop: "20px" }}>Aplique um Código de cupom, para receber descontos.</p>
          </div>
          <div></div>
        </div>
        <div id="cart-grid">
          <h3>Resumo do Carrinho</h3>
          <table>
            <thead>
              <tr>
                <td style={{ width: "45%" }}>Produto</td>
                <td style={{ width: "20%" }}>Preço</td>
                <td style={{ width: "25%" }}>Quantidade</td>
                <td style={{ width: "20%" }}>Total</td>
              </tr>
            </thead>
            <tbody>
              <td style={{ width: "40%" }}>
                <div id="product-info">
                  <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/artemis_preta1-b1ec4023ba6cb422b115864696012617-320-0.png" alt="" />
                  <span>Camisa Geek</span>
                </div>
              </td>
              <td style={{ width: "20%" }}>
                <h5>R$ 70,00</h5>
              </td>
              <td style={{ width: "20%" }}>
                <div id="product-quantity">
                  <ul>
                    <li id="subtract-button">
                      <div>-</div>
                    </li>
                    <li id="amount-button">
                      <input type="text" />
                    </li>
                    <li id="sum-button">
                      <div>+</div>
                    </li>
                  </ul>
                </div>
              </td>
              <td style={{ width: "20%" }}>
                <h5>R$ 70,00</h5>
              </td>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
