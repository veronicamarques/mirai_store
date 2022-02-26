import React from "react";
import Navbar from "../../components/navbar";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct, deleteProduct } from "../../redux/cartRedux";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleSumButton = (product) => {
    dispatch(updateProduct({ product, quantity: 1 }));
  };

  const handleSubtractButton = (product) => {
    dispatch(updateProduct({ product, quantity: -1 }));
  };

  const handleDeleteButton = (product) => {
    dispatch(deleteProduct({ product }));
  };

  return (
    <div>
      <Navbar />
      <section id="cart-container">
        <div id="cart-grid">
          <h3>Resumo do Carrinho</h3>
          <table>
            <thead>
              <tr>
                <td className="mobile-hidden" style={{ width: "10%" }}></td>
                <td style={{ width: "45%" }}>Produto</td>
                <td className="mobile-hidden" style={{ width: "15%" }}>Preço</td>
                <td style={{ width: "15%" }}>Quantidade</td>
                <td style={{ width: "15%" }}>Total</td>
              </tr>
            </thead>
            {cart.products.map((item) => {
              return (
                <tbody>
                  <td className="mobile-hidden" style={{ width: "10%", textAlign:"end"}}>
                    <span id="delete-button" onClick={() => handleDeleteButton(item)}>Excluir</span>
                  </td>
                  <td style={{ width: "45%" }}>
                    <div id="product-info">
                      <img src={item.image} alt="" />
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td className="mobile-hidden" style={{ width: "15%" }}>
                    <h5>R${item.price.toFixed(2)}</h5>
                  </td>
                  <td style={{ width: "15%" }}>
                    <div id="product-quantity">
                      <ul>
                        <li onClick={() => handleSubtractButton(item)} id="subtract-button">
                          <div>-</div>
                        </li>
                        <li id="amount-button">
                          <input type="text" value={item.quantity} />
                        </li>
                        <li onClick={() => handleSumButton(item)} id="sum-button">
                          <div>+</div>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td style={{ width: "15%" }}>
                    <h5>R${(item.price * item.quantity).toFixed(2)}</h5>
                  </td>
                </tbody>
              );
            })}
          </table>
        </div>
        <div id="payment-container">
          <div id="checkout-info">
            <h2>Resumo do Pedido</h2>
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              <p style={{ marginBottom: "5px" }}>1x Camiseta Geek</p>
              <p style={{ marginBottom: "5px" }}>1x Camiseta Geek</p>
              <p style={{ marginBottom: "5px" }}>1x Camiseta Geek</p>
            </div>
            <h3 style={{ float: "right" }}>R${cart.totalPrice}</h3>
            <h3>Total:</h3>
            <br />
            <button>
              <div>FINALIZAR COMPRA</div>
            </button>
            <p style={{ textAlign: "center", marginTop: "20px" }}>Aplique um Código de cupom, para receber descontos.</p>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
