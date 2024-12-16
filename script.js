// Fetch the current Bitcoin price
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        const price = data.bitcoin.usd;
        document.getElementById('bitcoin-price').textContent = `Current Bitcoin price: $${price}`;
    })
    .catch(error => console.error('Error fetching data:', error));

// Pizza Value Calculator
function calculatePizza() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            const price = data.bitcoin.usd;
            const pizzaValue = price * 10000;
            document.getElementById('pizza-value').textContent = `10,000 BTC is worth $${pizzaValue.toLocaleString()} today!`;
        });
}

// Placeholder Game Function
function startGame() {
    alert("The game feature is coming soon!");
}
