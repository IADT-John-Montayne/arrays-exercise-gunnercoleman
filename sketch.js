let names = ["John", "David", "Mary"];

 //Changes "David" to "Michael"
names[1] = "Michael";
console.log(names);

//Adds to Array  end
names.push("Sarah");
console.log(names);

//Lenght of Array
console.log(names.length);

//Removes last item
names.pop();
console.log(names);

//Adds Item to start
names.unshift("Harry");
console.log(names);

//Removes first item
names.shift();
console.log(names);

//Loops through array and prints every item
for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
};

//Finds index of item
console.log(names.indexOf("Mary"));

//Creates a new array from an array
names.push("Henry", "Thierry");
let bestFriends = names.slice(1,4);
console.log(bestFriends);

//Removes items from array using indexes
names.push("Havertz", "Saka", "Declan");
names.splice(2,3);
console.log(names);

//Adds to array using splice
names.splice(1,1, "Arteta");
console.log(names);

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
