const products = [
{
id:1,
name:"Smartphone",
price:15000
},
{
id:2,
name:"Laptop",
price:50000
},
{
id:3,
name:"Headphones",
price:2500
},
{
id:4,
name:"Smart Watch",
price:3500
},
{
id:5,
name:"Camera",
price:45000
},
{
id:6,
name:"Shoes",
price:3000
}
];

const cartItems = document.getElementById("cartItems");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

function displayCart() {

cartItems.innerHTML = "";

cart.forEach((itemId,index)=>{

const product = products.find(
p => p.id === itemId
);

if(product){

total += product.price;

cartItems.innerHTML += `
<div class="card">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="removeItem(${index})">
Remove
</button>
</div>
`;
}

});

document.getElementById("totalPrice")
.textContent = "Total: ₹" + total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

location.reload();

}

displayCart();
