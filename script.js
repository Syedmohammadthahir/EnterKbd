
var button = document.getElementById("enter");// By ID
var input = document.getElementById("userinput");// By ID
var ul = document.querySelector("ul"); // By tag


//Input from the user

function inputLength() {
	return input.value.length; // for Output 
}

// Creating the list items

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); // Append - To add | Child of the the parent (ul)
	input.value = ""; // To clear before the blankspace
}

// After the user click event

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


  // Key Value to Enter from the keyboard

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { // Key value from the keyboard
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick); // even listner - button click   

input.addEventListener("keypress", addListAfterKeypress); // even listner  - keyboard input (Enter)

//Node belongs to the dom
// Elements to belongs to HTML