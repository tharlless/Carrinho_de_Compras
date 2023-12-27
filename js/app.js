let priceTotal = 0;
cleanAll();

function addItens(){
    //Recuperar valores e nomes dos produtos, quantidade e valor.

    let product = document.getElementById('produto').value;
    let nameProduct = product.split('-')[0];
    let valueUnitary = product.split('R$') [1];
    let amountproducts = document.getElementById('quantidade').value;

    //calcular preço, o nosso total
    let price = amountproducts * valueUnitary;
    let buyList = document.getElementById('lista-produtos');
    //adiconar ao carrinho
    buyList.innerHTML = buyList.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${amountproducts}x</span> ${nameProduct} <span class="texto-azul">R$${valueUnitary}</span>
  </section>`;

    //atualizar o valor total.

    priceTotal = priceTotal + price;
    let showEndPrice = document.getElementById('valor-total');
    showEndPrice.textContent = `R$ ${priceTotal}`;
    document.getElementById('quantidade').value = 0;
}

function cleanAll(){
    priceTotal = 0;
    document.getElementById('lista-produtos').innerHTML = 'Seus produtos vão ser colocados logo abaixo.';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}