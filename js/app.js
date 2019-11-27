'use strict'
var imagePaths = [
   "bag.jpg",
  "banana.jpg",
  "bathroom.jpg",
  "boots.jpg",
  "breakfast.jpg",
  "bubblegum.jpg",
  "chair.jpg",
  "cthulhu.jpg",
  "dog-duck.jpg",
  "dragon.jpg",
  "pen.jpg",
  "pet-sweep.jpg",
  "scissors.jpg",
  "shark.jpg",
  "sweep.png",
  "tauntaun.jpg",
  "unicorn.jpg",
  "usb.gif",
  "water-can.jpg",
  "wine-glass.jpg"
];
var leftProduct;
var rightProduct;
var centerProduct;
var rounds = 0;
var leftImage = document.querySelector("#leftImage");
var centerImage = document.querySelector("#centerImage");
var rightImage = document.querySelector("#rightImage");
var imagesSection = document.querySelector("#imagesSection");
///////////////////Constructor Function////////////
function Product(path) {
  var pathArr = path.split(".");
  this.name = pathArr[0];
  ////// Image Path should be dynamically///////
  this.imagePath = `img/${this.name}.${pathArr[1]}`;
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}

Product.all = [];

for (let i = 0; i < imagePaths.length; i++) {
  new Product(imagePaths[i]);
}
//////////// Check to prevent shown the same images in the same line without changes the 3 images///////////
var previousIndexs = [];
function getUniqueIndex() {
  var index = randomNumber(0, Product.all.length - 1);
  while (previousIndexs.includes(index)) {
    index = randomNumber(0, Product.all.length - 1);
  }
  previousIndexs.push(index);
  if (previousIndexs.length > 3) {
    previousIndexs.shift();
  }
  return index;
}
//////////////////////////////Render Function//////////////////////////////////////////////////////

function render() {
  
    var leftProduct = Product.all[getUniqueIndex()];
    var rightProduct =Product.all[getUniqueIndex()];
    
    var centerProduct = Product.all[getUniqueIndex()];
    
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
///////////////////////////Handle click function/////////////////////////////////////////
function handleClick(e) {
  rounds++;
  console.log(rounds);
  if (rounds !== 25) {
    if (e.target.id !== "imagesSection") {
      for (let x = 0; x < Product.all.length; x++) {
        if (e.target.title === Product.all[x].name) {
          Product.all[x].votes++;
          console.table(Product.all);
        }
      }
      render();
    }
  } else if (rounds === 25) {
    imagesSection.removeEventListener("click", handleClick);
    alert('Its Just 25 Click');
    renderChartAndList();
    updateList();
  }
}

imagesSection.addEventListener("click", handleClick);
getList();
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
////////////////////List amd Chart " This is code from Demo"////////////////////////////////////////////////

function renderChartAndList() {
  var votes = [];
        var views = [];
        var labels = [];
    var imagesSection = document.querySelector("#imagesSection");
    var sectionEl = document.createElement("section");
    imagesSection.appendChild(sectionEl);
    var ulEl = document.createElement("ul");
  for (let i = 0; i < Product.all.length; i++) {
    var liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
    liEl.textContent = `${Product.all[i].name} had ${Product.all[i].votes} votes and was shown ${Product.all[i].views} times`;
    labels.push(Product.all[i].name);
    votes.push(Product.all[i].votes);
    views.push(Product.all[i].views);
  }

  var ctx = document.getElementById("myChart").getContext("2d");

  var voteData = {
    label: "# of Votes",
    data: votes,
    backgroundColor: "#F888FA"
    // hoverBackgroundColor: "blue"
  
  };

  var viewsData = {
    label: "# of Views",
    data: views,
    backgroundColor: "#34A012"
  };

  var labelsInfo = {
    labels: labels,
    datasets: [voteData, viewsData]
  };

  var chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  var myChart = new Chart(ctx, {
    type: "bar",
    data: labelsInfo,
    options: chartOptions
  });
}
function updateList() {
  var listString = JSON.stringify(Product.all);
  localStorage.setItem("update", listString);
}
function getList() {
  var listString =localStorage.getItem("update");
  if (listString) {
  // console.log(JSON.parse(listString));
     Product.all = JSON.parse(listString);
    
     render();
  }

}

