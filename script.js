// Функция получения цены биткоина
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        const price = data.bitcoin.usd;
        document.getElementById('bitcoin-price').textContent = `Текущая цена биткоина: $${price}`;
    })
    .catch(error => console.error('Error fetching data:', error));

// Функция для калькулятора
function calculatePizza() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            const price = data.bitcoin.usd;
            const pizzaValue = price * 10000;
            document.getElementById('pizza-value').textContent = `10,000 BTC стоят $${pizzaValue.toLocaleString()} сегодня!`;
        });
}

// Функция игры
function startGame() {
    alert("Скоро игра будет доступна!");
}
