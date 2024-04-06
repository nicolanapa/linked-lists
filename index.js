class Node {
	constructor(value) {
		this.value = value;
		this.next = null;

		//console.log("Node:", this.value);
	}
}

// Appends it at the end of a list
// Working
function append(list, value) {
	console.log("Appending", value);

	let newNode = new Node(value);

	if (list === null) {
		list = newNode;
	} else {
		let last = list;

		while (last.next !== null) {
			last = last.next;
		}

		last.next = newNode;
	}

	return list;
}

// Prepends it at the start of a list
// Working
function prepend(list, value) {
	console.log("Prepending", value);

	let newNode = new Node(value);
	newNode.next = list;

	return newNode;
}

// Returns the size of a list
// Working
function size(list) {
	console.log("Calculating size...");

	let i = 0;
	let current = list;

	while (current !== null) {
		i += 1;
		current = current.next;
	}

	return console.log(i);
}

// Returns the head (first node) of a list
// Working
function head(list) {
	console.log("Returning head (", list.value, ")");

	return console.log(list.value);
}

// Returns the tail (last node) of a list
// Working
function tail(list) {
	console.log("Returning tail...");
	let current = list;

	while (current.next !== null) {
		current = current.next;
	}

	return console.log(current.value);
}

// Returns the node (value) at a specific index of a list
// Working
function at(list, index) {
	console.log("Returning your node at", index);

	let current = list;
	for (let i = 0; i < index; i++) {
		if (current.next === null || current.next === undefined) {
			return console.log("Overflow!");
		}
		current = current.next;
	}

	return console.log(current.value);
}

// Removes the last element/node from a list
// Working
function pop(list) {
	console.log("Removing last element...");
	let current = list;

	while (current.next.next !== null) {
		current = current.next;
	}

	console.log("Removed:", current.next.value);
	current.next = null;

	return current;
}

function contains(value) {}

function find(value) {}

// Return the whole list to a string readable format
// Working
function toString(list) {
	console.log("Converting toString" /*, JSON.stringify(list, null, 4)*/);

	let string = "";
	let current = list;

	while (current !== null) {
		string += "( " + current.value + " ) -> ";
		current = current.next;
	}

	string += null;
	return console.log(string);
}

function test() {
	let prova0 = null;
	prova0 = append(prova0, "4a");
	prova0 = prepend(prova0, "3c");
	prova0 = prepend(prova0, "2b");
	prova0 = append(prova0, "5d");
	head(prova0);

	toString(prova0);
	pop(prova0);
	toString(prova0);

	size(prova0);

	tail(prova0);

	at(prova0, 1);
}

test();
