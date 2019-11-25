'use strict'
var names = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "sweep",
  "tauntaun",
  "unicorn",
  "usb",
  "water-can",
  "wine-glass"
];
var leftProduct;
var rightProduct;
var centerProduct;
var rounds = 25;
var leftImage = document.querySelector("#leftImage");
var centerImage = document.querySelector("#centerImage");
var rightImage = document.querySelector("#rightImage");
var imagesSection = document.querySelector("#imagesSection");

function Product(name) {
  this.name = name;
  this.imagePath = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}
Product.all = [];

for (let i = 0; i < names.length; i++) {
  new Product(names[i]);
}
// new Product("bag", "img/bag.jpg");
// new Product("banana", "img/banana.jpg");
// new Product("bathroom", "img/bathroom.jpg");
// new Product("boots", "img/boots.jpg");
// new Product("breakfast", "img/breakfast.jpg");
// new Product("bubblegum", "img/bubblegum.jpg");
// new Product("chair", "img/chair.jpg");
// new Product("cthulhu", "img/cthulhu.jpg");
// new Product("dog-duck", "img/dog-duck.jpg");
// new Product("dragon", "img/dragon.jpg");
// new Product("pen", "img/pen.jpg");
// new Product("pet-sweep", "img/pet-sweep.jpg");
// new Product("scissors", "img/scissors.jpg");
// new Product("shark", "img/shark.jpg");
// new Product("sweep", "img/sweep.jpg");
// new Product("tauntaun", "img/tauntaun.jpg");
// new Product("unicorn", "img/unicorn.jpg");
// new Product("usb", "img/bag.jpg");
// new Product("water-can", "img/water-can.jpg");
// new Product("wine-glass", "img/win-glass.jpg");

////////////////////////////////////////////////////////////////////////////////////

function render() {
  while (leftProduct=== rightProduct || leftProduct=== centerProduct|| rightProduct=== centerProduct) {
    var leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    
    var rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    
    var centerProduct = Product.all[randomNumber(0, Product.all.length - 1)];
  }
    
    leftProduct.views++;
    centerProduct.views++;
  rightProduct.views++;
  leftImage.setAttribute("src", leftProduct.imagePath);
  leftImage.setAttribute("alt", leftProduct.name);
  leftImage.setAttribute("title", leftProduct.name);
  
  centerImage.setAttribute("src", centerProduct.imagePath);
  centerImage.setAttribute("alt", centerProduct.name);
  centerImage.setAttribute("title", centerProduct.name);
  
  rightImage.setAttribute("src", rightProduct.imagePath);
  rightImage.setAttribute("alt", rightProduct.name);
  rightImage.setAttribute("title", rightProduct.name);
}
render();
////////////////////////////////////////////////////////////////////
function handleClick(e) {
  if (e.target.id !== "imagesSection") {
    for (let i = 0; i < Product.all.length; i++) {
      if (e.target.title === Product.all[i].name) {
        Product.all[i].votes++;
      }
    }
    console.table(Product.all);
    render();
  }
}
imagesSection.addEventListener("click", handleClick);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


 