function filterKeychains(type) {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        if (type === "all" || card.classList.contains(type)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

let cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}
function renderCart() {
    let cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `<span>${item.name}</span> <span>Rp ${item.price.toLocaleString()}</span>`;
        cartItemsDiv.appendChild(div);
    });
    document.getElementById("cart-total").innerText = total.toLocaleString();
}
function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}
