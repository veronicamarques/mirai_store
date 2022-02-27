import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/index";
import "./styles.css";

function PolicyPage() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Política de Troca</h1>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ textAlign: "justify", width: "40em", fontSize: "16pt", margin: "50px" }}>
          <span className= "span-topics" >Como funciona o direito de arrependimento?</span>
          <div className="box-topics">
            De acordo com artigo 49 do Código de Defesa do Consumidor - CDC, o consumidor poderá desistir do contrato, no prazo de 7 dias a contar de sua assinatura 
            ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial.
            <br />
            No caso de kits de produtos ou promoções combinadas (ex.: compre X, ganhe Y), é permitida apenas a devolução integral do combo, com ressarcimento do valor 
            integral pago ou voucher no valor total pago. O prazo para solicitação de devolução é de sete 7 dias corridos após o recebimento da compra.
          </div>

          <span className= "span-topics" >Como funciona o processo de troca?</span>
          <div className="box-topics">
            Nossa política do consumidor assegura a troca dos produtos em um prazo de 7 dias corridos após o recebimento do pedido. Para solicitar a troca de algum 
            produto, basta enviar um email para vendas@miraistore.com e solicitar a troca, independente do motivo.
            <br />
            <br />
            Cada tipo de troca possui sua política específica. Após a solicitação, nossa equipe responderá em até 48h úteis com as devidas orientações.
            <br />
            <br />
            Todos os produtos trocados passam por uma análise no momento em que chegam na central de distribuição da Mirai Store.
            <br />
            <br />
            <b>Trocas ou Devoluções</b>
            <br />
            <br />
            Se por algum motivo você não gostou do produto, mudou de ideia, ele está com defeito e deseja trocá-lo, envie um e-mail para vendas@miraistore.com 
            relatando o problema. Dessa forma responderemos o mais rápido possível e daremos início ao processo de troca.
            <br />
            <br />
            Verifique abaixo os motivos para trocas e seus respectivos prazos:
            <br />
            <br />
            <b>Arrependimento ou tamanho incorreto:</b>
            <br />
            <br />
            Você pode mudar de ideia quanto ao produto e pode trocá-lo por outro ou ter seu dinheiro ressarcido. O prazo máximo 
            para você efetuar uma troca por esse motivo é de 7 dias após o recebimento.
            <br />
            <br />
            Para garantia da legalidade de todo o procedimento, é preciso observar que:
            <br />
            <br/>
            - o produto não pode ter quaisquer indícios de uso.
            <br />
            <br />
            - tags, marca páginas e qualquer outros brindes que foram com o produto, devem retornar junto com ele.
            <br />
            <br />
            <b>Arrependimento</b>
            <br />
            <br />
            No caso de arrependimento, você terá seu dinheiro integral ressarcido, e o frete de retorno será por conta da loja.
            <br />
            <br />
            <b>Tamanho incorreto</b>
            <br />
            <br />
            Na modalidade de tamanho incorreto, tanto o frete de retorno da camiseta de tamanho errado, quanto a da nova camiseta fica por conta do COMPRADOR.
            <br />
            <br />
            As condições acima citadas deverão ser cumpridas para que o reembolso ou o estorno da transação seja efetuado. Caso seja identificada qualquer 
            divergência ou violação do produto, não aceitaremos a devolução e devolveremos o produto ao remetente.
            <br />
            <br />
            Após o produto retornar e for constatado que tudo está ok, o reembolso será feito através de alguma instituição financeira ou estorno na fatura 
            do cartão caso a compra tenha sido feita desta forma.
            <br />
            <br />
            Estorno
            <br />
            <br />
            Em qualquer caso de estorno, o mesmo só será feito após os produtos voltarem para a loja.
          </div>

          <span className= "span-topics" >Como faço uma solicitação de troca?</span>
          <div className="box-topics">
            Basta enviar um email para vendas@miraistore.com
            <br />
            <br />
            No email é necessário informar a quantidade de produtos a serem trocados e o motivo da troca de cada produto. A descrição é opcional.
            <br />
            <br />
            Após a solicitação, nossa equipe responderá em até 48h úteis com as devidas orientações.
          </div>

          <span className= "span-topics" >Ganhei um presente e quero trocar. O que devo fazer?</span>
          <div className="box-topics">
            Em caso de presentes, envie um e-mail para vendas@miraistore.com com o número do pedido, nome completo ou e-mail da pessoa que realizou a compra.
          </div>

          <span className= "span-topics" >Recebi um produto errado ou com defeito, o que faço?</span>
          <div className="box-topics">
            Primeiramente, pedimos desculpas pelo transtorno. Nesse caso, a solicitação de troca é feita do mesmo jeito que as demais, porém, sem qualquer custo 
            para o cliente.
            <br />
            <br />
            Nesse caso, é obrigatório o envio de foto do produto.
            <br />
            <br />
            Assim que recebermos o(s) produto(s), criaremos um novo pedido em sua conta com o(s) produto(s) correto(s).
          </div>

          <span className= "span-topics" >O produto que desejo trocar está esgotado no site. O que faço?</span>
          <div className="box-topics">
            Caso não consiga selecionar o tamanho desejado no seu cadastro de troca, favor entrar em contato conosco por e-mail: vendas@miraistore.com
            <br />
            <br />
            Em casos de produto esgotado no momento de gerar o novo pedido, oferecemos duas opções: devolução do produto com reembolso do valor pago ou troca 
            por cupom no valor pago (já aplicados possíveis descontos).
          </div>

          <span className= "span-topics" >Quanto tempo tenho para enviar um produto para troca?</span>
          <div className="box-topics">
          O cliente terá um prazo de 7 dias corridos para fazer a postagem dos produtos após a aprovação da troca. Caso a postagem não ocorra neste período, 
          a troca será automaticamente cancelada.
          </div>

          <span className= "span-topics" >O que fazer em caso de descostura da peça?</span>
          <div className="box-topics">
            Primeiramente, pedimos desculpas pelo transtorno. Nesse caso, por favor entre em contato com o nosso atendimento pelo e-mail 
            vendas@miraistore.com no prazo de até 30 dias após a data de recebimento, que iremos receber a sua peça para conserto e reenviá-la a você, 
            com os custos de envio por nossa conta.
          </div>

          <span className= "span-topics" >Quais são os custos para realizar a troca?</span>
          <div className="box-topics">
            Em caso de defeito ou envio errado, todas as despesas são arcadas pela Mirai Store (válido para o território brasileiro). Uma vez que o produto 
            a ser trocado esteja de volta a nossa central de distribuição, o novo pedido será gerado com o frete por nossa conta (para o mesmo endereço 
            do pedido original). A modalidade do frete neste caso é escolhida automaticamente pelo sistema.
            <br />
            <br />
            Se o motivo for por tamanho, os fretes de devolução do produto a ser trocado, assim como do envio do novo produto no novo tamanho selecionado 
            será por conta do COMPRADOR. 
          </div>

          <span className= "span-topics" >Qual é o endereço para envio de produtos a serem trocados?</span>
          <div className="box-topics">
            <b>Os produtos para troca devem ser enviados para:</b>
            <br />
            <br />
            <b>Mirai Store</b>
            <br />
            <br />
            <span className="span-street">Av. Paulista, 807 - Bela Vista, São Paulo/SP, 01311-100</span>
          </div>
        </p>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default PolicyPage;
