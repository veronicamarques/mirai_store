import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/index";

function PolicyPage() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Política de Troca</h1>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ textAlign: "left", width: "40em", fontSize: "20pt", margin: "50px 50px 50px 50px" }}>
          A política da nossa loja sobre trocas de produtos adquiridos conosco, visa proporcionar ao cliente segurança e tranquilidade. Realizamos as trocas dos
          produtos gratuitos apenas em casos de defeitos comprovados com nossos termos citados abaixo. Produtos pagos tem garantia de troca no caso de defeitos
          de fabricação. Realizaremos também a troca do produto no caso de você receber um produto que não foi o que você encomendou. Caso você receba um
          produto com algum dos aspectos mencionados acima, siga a nossa instrução abaixo para que possamos providenciar a troca da mercadoria. 1- Entre em
          contato conosco e nos informe sobre o problema por meio do nosso e-mail de atendimento ao cliente contato@ofertaria.com, não se esqueça de colocar
          fotos claras do produto com o defeito amostra ou do produto errado que você recebeu dentro de 3 dias após o recebimento do produto. Observação: Após
          este prazo não realizamos trocas ou devoluções de dinheiro. 2- Sua solicitação será avaliada em até dois dias úteis e constatado o problema,
          entraremos em contato por e-mail e você escolher uma das seguintes alternativas abaixo: -Receber o reembolso do valor pago. -Receber um novo produto
          igual ao encomendado -Receber um produto de valor semelhante -Receber um cupom com o valor do produto para utilizar em compras futuras. Não realizamos
          trocas de produtos com tamanho inadequado para o cliente: Disponibilizamos as medidas em centímetros de nossos produtos para não haver erro na escolha
          do tamanho. Conforme é dito no Código de Defesa do Consumidor - Artigo 18, não existe a obrigação legal do lojista de realizar trocas por motivos de
          arrependimento do consumidor quanto à cor, tamanho, modelo, ou outra qualquer hipótese. O direito que é assegurado ao cliente pelo Código de Defesa do
          Consumidor é o de realizar trocas apenas nos casos de produtos com defeitos.
        </p>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default PolicyPage;
