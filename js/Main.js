var myH1 = document.getElementById("myH1");
	myH1.innerText = "Hello World!";

var myNewH1 = document.getElementById("myNewH1");

function getInfo() {
	var Input = document.getElementById("Input").value;
	console.log(Input);
		myNewH1.innerText = Input;
	}


var stringArray = ["this", "is", "a", "string", "array"];

for(var i = 0; i < stringArray.length; i++) {
	console.log(stringArray[i]);
}

var myObj = {
	name: "Jason",
	age: 30,
	isFemale: false
};


console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.isFemale);

var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading3 = document.getElementById("heading3");

	heading1.innerText = myObj.name;
	heading2.innerText = myObj.age;
	heading3.innerText = myObj.isFemale;


var myArray = [
	{
		name: "Vraska's Contempt",
		cmc: "2BB",
		rarity: "rare"
	},
	{	
		name: "Fatal Push",
		cmc: "B",
		rarity: "uncommon"
	},
	{	
		name: "Cast Down",
		cmc: "1B",		
		rarity: "uncommon"
	}
];


for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i].name);
	console.log(myArray[i].cmc);
	console.log(myArray[i].rarity);
}



document.body.style.color = "red";