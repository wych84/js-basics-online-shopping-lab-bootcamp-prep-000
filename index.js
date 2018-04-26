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
  if (item == cart[i].itemName);  
  for (var i = 0; i < cart.length; i++) {
    cart.splice(cart[i].itemName,1);
  }
    return cart;
}
else
 return function removeFromCart(item) {
  if (item == cart[i].itemName);  
  for (var i = 0; i < cart.length; i++) {
    cart.splice(cart[i].itemName,1);
  }
    return cart;
}
  else
return `That item is not in your cart.`;
}
}
}
}

function placeOrder(cardNumber) {
  // write your code here
}

function viewCart() {

}