var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1}); 
  return `${item} has been added to your cart.`;
}


function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
  sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item == cart[i].itemName)
    cart.splice(cart[i].itemName,1);
}
return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}

function viewCart() {

}