import React from "react";
import Navbar from "../../components/navbar";
import "./styles.css";

function CartPage() {
  return (
    <div>
      <Navbar />
      <section id="cart-container">
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
                      <span>-</span>
                    </li>
                    <li>
                      <input type="text" />
                    </li>
                    <li id="sum-button">
                      <span>+</span>
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
        <div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
