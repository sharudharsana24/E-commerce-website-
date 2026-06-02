let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cartCount");

if(cartCount){
    cartCount.textContent = cart.length;
}
