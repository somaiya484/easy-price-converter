document.getElementById('apply-btn').addEventListener('click', function(){
    const price = document.getElementById('price')
    const priceNumber = price.value;
    const number = priceNumber - parseInt(priceNumber) * 0.3;
    const totalPrice = document.getElementById('total-price');
    const totalPriceNumber  = totalPrice.innerText;
    const total = parseInt(totalPriceNumber);
    totalPrice.innerText = number;
})