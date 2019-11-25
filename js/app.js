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
var rounds = 0;
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
        rounds=rounds+1;
        console.table(Product.all);
      
        
      console.log(rounds);
    }else if (rounds==25) {
      imagesSection.removeEventListener("click", handleClick);
      
      alert("it's just 25 click");
      list();
    }
    
  }
  render(); 
}
}
imagesSection.addEventListener("click", handleClick);
////////////////////List////////////////////////////////////////////////
function list() {
  var sectionEl=document.createElement("section");
  imagesSection.appendChild(sectionEl);
  var ulEl=document.createElement("ul");
  for (let i = 0; i< Product.all.length; i++) {
   
    var liEl=document.createElement('li');
    sectionEl.appendChild(ulEl);
    ulEl.appendChild(liEl);
    liEl.textContent= `${names[i]} has ${Product.all[i].votes} votes and was shown ${Product.all[i].views} time` ;
  }
  
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//////////////////Chart//////////////////////////////////////////////////
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });


 