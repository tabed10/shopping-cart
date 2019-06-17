var products = [
  {name: "Wonder Woman Figurine", price: "12", image: "https://s3.amazonaws.com/mernbook/marketplace/wonder-woman-2977918_960_720.jpg"},
  {name: "Darth Vader Figurine", price: "19", image: "https://s3.amazonaws.com/mernbook/marketplace/star-wars-2463926_960_720.png"},
  {name: "Joker Figurine", price: "51", image: "https://s3.amazonaws.com/mernbook/marketplace/joker-1225051_960_720.jpg"},
  {name: "Tardis Figurine", price: "14", image: "https://s3.amazonaws.com/mernbook/marketplace/tardis.png"},
  {name: "Old Ford Car Model", price: "46", image: "https://s3.amazonaws.com/mernbook/marketplace/Ford.jpg"},
  {name: "Storm Trooper Figurine", price: "23", image: "https://s3.amazonaws.com/mernbook/marketplace/stormtrooper-1995015_960_720.jpg"}
];
var cart = {
  items: [],
  total: 0
};

$(document).ready(function(){
  console.log("Start here");
  // Basic tasks
  // 1. Show / hide cart section on button click (Cart button / close cutton)
  $('#showCartBtn').click(function(){
    $('cart').show();
  })

  $('#close').click(function(){
    $('#cart').hide();
  })
  // 2. Dynamically load products to view
  for(var i=0; i < products.length; i++){
    var divCol = $('div class"col-md-4">')
    var divCard = $('<div class"card-body">')
    var image = $('img class="card-img-top" src="'+products[i].image+'" />')
    var divCardBody = $('')
    cartBtn.attr('id', i)
    divCardBody.append(title)
    divCard.append(image)
    divCard.append(divCardBody)
    $('#products').append(divCol)

  }
  // 3. Dynamically show total items in Cart
  // 4. Add to cart button functionality
  // 5. Dynamically load cart items
  // 6. Implement quantity update for each cart item and update total cost dynamically.
  // 7. Store and load cart from localStorage
});
