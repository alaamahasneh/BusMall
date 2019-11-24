var names=[
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
"win-glass"
];
// var myPix = [
//     'img/bag.jpg',
//   'img/banana.jpg',
//   'img/bathroom.jpg',
//   'img/boots.jpg',
//   'img/breakfast.jpg',
//   'img/bubblegum.jpg',
//   'img/chair.jpg',
//  'img/cthulhu.jpg',
//   'img/dog-duck.jpg',
//   'img/dragon.jpg',
//   'img/pen.jpg',
//   'img/pet-sweep.jpg',
//   'img/scissors.jpg',
//   'img/shark.jpg',
//   'img/sweep.jpg',
//   'img/tauntaun.jpg',
//   'img/unicorn.jpg',
//   'img/bag.jpg',
//   'img/water-can.jpg',
//   'img/win-glass.jpg',
// ];

// var leftProduct;
// var centerProduct;
// var rightProduct;
var counter=0;
var leftImage = document.querySelector("#leftImage");
var centerImage= document.querySelector("#centerImage");
var rightImage = document.querySelector("#rightImage");
var imagesSection = document.querySelector("#imagesSection");

function Product(name) {
    // this.myPix=[];
    this.name = name;
    this.imagePath = `img/${name}.jpg`;
    Product.all.push(this);
  }
  Product.all = [];


    

  new Product('bag','img/bag.jpg');
  new Product('banana','img/banana.jpg');
  new Product('bathroom','img/bathroom.jpg');
  new Product('boots','img/boots.jpg');
  new Product('breakfast','img/breakfast.jpg');
  new Product('bubblegum','img/bubblegum.jpg');
  new Product('chair','img/chair.jpg');
  new Product('cthulhu','img/cthulhu.jpg');
  new Product('dog-duck','img/dog-duck.jpg');
  new Product('dragon','img/dragon.jpg');
  new Product('pen','img/pen.jpg');
  new Product('pet-sweep','img/pet-sweep.jpg');
  new Product('scissors','img/scissors.jpg');
  new Product('shark','img/shark.jpg');
  new Product('sweep','img/sweep.jpg');
  new Product('tauntaun','img/tauntaun.jpg');
  new Product('unicorn','img/unicorn.jpg');
  new Product('usb','img/bag.jpg');
  new Product('water-can','img/water-can.jpg');
  new Product('wine-glass','img/win-glass.jpg');


  ////////////////////////////////////////////////////////////////////////////////////
  
  function render() {
    //   while (centerImage == leftImage || centerImage== rightImage) {
    //    var centerProduct= Product.all[randomPic(Product.all.length )];
    //    centerImage.setAttribute("src",centerProduct.imagePath);
    // centerImage.setAttribute("alt",centerProduct.name);
    // centerImage.setAttribute("title",centerProduct.name);
    //   }
    //   while (leftImage == rightImage) {
    //     var leftProduct = Product.all[randomPic( Product.all.length)];
    //     leftImage.setAttribute("src", leftProduct.imagePath);
    //     leftImage.setAttribute("alt", leftProduct.name);
    //     leftImage.setAttribute("title", leftProduct.name);
    //   }
    // console.log(leftProduct)
    
    
    
        while(centerImage === leftImage || centerImage === rightImage || rightImage === leftImage){
    };
           
                var leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
                
                var rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
                
                var centerProduct= Product.all[randomNumber(0, Product.all.length - 1)];
       

    leftImage.setAttribute("src", leftProduct.imagePath);
    leftImage.setAttribute("alt", leftProduct.name);
    leftImage.setAttribute("title", leftProduct.name);

    centerImage.setAttribute("src",centerProduct.imagePath);
    centerImage.setAttribute("alt",centerProduct.name);
    centerImage.setAttribute("title",centerProduct.name);

    rightImage.setAttribute("src", rightProduct.imagePath);
    rightImage.setAttribute("alt", rightProduct.name);
    rightImage.setAttribute("title", rightProduct.name);

counter=counter+1;
  }
  render();
  ////////////////////////////////////////////////////////////////////
  imagesSection.addEventListener("click", function(e) {
    console.log(event.target.id);
    if (event.target.id !== "imagesSection") {
      render();
    }
  });
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//   function randomPic(){
//  var  randompics=  Math.floor(Math.random() * Product.all.length);
//   return Product.all[randompics];
//   }
 