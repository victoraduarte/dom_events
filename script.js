var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var cart = document.getElementById("cart");
var li = document.querySelector("li");

const DELETE_BUTTON_STYLE = "deleteButton";
const CART_ITEM_STYLE = "liCart";

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.add(CART_ITEM_STYLE);
	li.appendChild(document.createTextNode(input.value));
	addButton2Item(createDeleteButton(), li);
	cart.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function findListItem(item) {
	var li = null;
	var list = document.getElementById("cart").children;
	if (item !== null) {
		for (var i = 0; i < list.length; i++) {
			if (list[i].textContent === item.textContent) {
				li = list[i];
				break;
			}
		}
	}
	else console.log("item is null")
	return li;
}

function deleteItem(item) {
	if (item !== null) cart.removeChild(item);
}

function strikeItem(item) {
	if (item !== null) item.classList.toggle("done");
}

function createDeleteButton() {
	var btn = document.createElement("button");
	btn.classList.add(DELETE_BUTTON_STYLE);
	return btn;
}

function addButton2Item(btn, item) {
	if (btn !== null && item !== null) item.appendChild(btn);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

cart.addEventListener("click", function(event) {
	var item;
	var isDelete = false;
	if (event.srcElement.className === "deleteButton") {
		item = event.srcElement.parentElement;
		isDelete = true;
	}
	else item = event.srcElement;	
	var li = findListItem(item);
	if (isDelete) deleteItem(item);
	else strikeItem(item);
})

