document.addEventListener("DOMContentLoaded", function () {
    const games = [
        { price: 79.99 },
        { price: 139.99 },
        { price: 89.99 }
    ];
    function calculateTotalPrice(index, isVIP = false) {
        const taxRate = 0.1; // 10% tax
        let basePrice = games[index].price;
        let totalPrice = basePrice + basePrice * taxRate;

        if (isVIP) {
            totalPrice *= 0.9;
        }

        return totalPrice.toFixed(2);
    }
    
    document.getElementById("purchase-btn").addEventListener("click", function () {
        const selectedGame = document.querySelector('input[name="selected-game"]:checked');

        if (!selectedGame) {
            document.getElementById("total-price").innerText = "Please select a game.";
            return;
        }

        const isVIP = document.getElementById("vip-status").checked;
        const total = calculateTotalPrice(parseInt(selectedGame.value), isVIP);

        document.getElementById("total-price").innerText = `Total Price: $${total}`;
    });
});