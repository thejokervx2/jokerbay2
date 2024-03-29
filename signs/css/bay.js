

var currencyAmount = 0;

document.getElementById('currencyAmount')

currencyAmount.addEventListener('click',function(){

var amount= currencyAmount.valueOf;
amount+=5
currencyAmount.innerHTML = amount.toFixed(2)+'$';
})
