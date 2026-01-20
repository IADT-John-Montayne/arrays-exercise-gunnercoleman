let basket = ["apple","banana","orange","pear"];
console.log(basket[1]);

console.log(basket.length);
//The length of the array is 4, meaning i must log the value 3
console.log(basket[3]);

console.log(basket.indexOf("banana"));
//index of banana is = to 1
basket[1] = "kiwi";

//Pop removes last item
console.log(basket);
basket.pop();
console.log(basket);

//Ushift adds to start of array
basket.unshift("mango");
console.log(basket);

//Loops through array and displays each index
for(let i = 0; i <basket.length; i++){
    console.log(i);
}

for(let i = 0; i <basket.length; i++){
    console.log("Fruit " + (i+1) + ": " + basket[i]);
}

console.log(basket.indexOf("orange"));
//Orange has an index of 3

if(basket.indexOf("orange") !== -1) {
    console.log("Orange found at index: " + basket.indexOf("orange"));
}

if(basket.indexOf("ornage") == -1) {
    console.log("Orange not found at index");
};

let citrus = basket.slice(1, basket.length -1);
console.log(basket);
console.log(citrus);


function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}