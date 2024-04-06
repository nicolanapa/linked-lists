class Node {
	constructor(value) {
		this.value = value;
		this.nextNode = null;

		//console.log("Node:", this.value);
	}
}

// Appends it at the end of a list
// Working
function append(list, value) {
	console.log("Appending", value);

	let new_node = new Node(value);

	if (list === null) {
		list = new_node;
	} else {
		let last = list;

		while (last.nextNode !== null) {
			last = last.nextNode;
		}

		last.nextNode = new_node;
	}

	return list;
}

// Prepends it at the start of a list
// Working
function prepend(list, value) {
	console.log("Prepending", value);

	let new_node = new Node(value);
	new_node.nextNode = list;

	return new_node;
}

// Returns the size of a list
// Working
function size(list) {
	console.log("Calculating size...");

	let i = 0;
	let current = list;

	while (current !== null) {
		i += 1;
		current = current.nextNode;
	}

	return i;
}

// Returns the head (first node) of a list
// Working
function head(list) {
	console.log("Returning head (", list.value, ")");

	return list.value;
}

// Returns the tail (last node) of a list
// Working
function tail(list) {
	console.log("Returning tail...");
	let current = list;

	while (current.nextNode !== null) {
		current = current.nextNode;
	}

	return current.value;
}

// Returns the node (value) at a specific index of a list
// Working
function at(list, index) {
	console.log("Returning your node at", index);

	let current = list;
	for (let i = 0; i < index; i++) {
		if (current.nextNode === null || current.nextNode === undefined) {
			return console.log("Overflow!");
		}
		current = current.nextNode;
	}

	return current.value;
}

// Removes the last element/node from a list
// Working
function pop(list) {
	console.log("Removing last element...");
	let current = list;

	while (current.nextNode.nextNode !== null) {
		current = current.nextNode;
	}

	console.log("Removed:", current.nextNode.value);
	current.nextNode = null;

	return current;
}

// Returns true if a list contains a given value, otherwise false
// Working
function contains(list, value) {
	console.log("Checking if it contains:", value);

	let current = list;

	while (current.nextNode !== null) {
		if (current.value === value) {
			return true;
		}
		current = current.nextNode;
	}

	if (current.value === value) {
		return true;
	} else {
		return false;
	}
}

// Returns the index of the node containing a given value, otherwise null
// Working
function find(list, value) {
	console.log("Finding:", value);

	let i = 0;
	let current = list;

	while (current.nextNode !== null) {
		i += 1;

		if (current.value === value) {
			return i;
		}
		current = current.nextNode;
	}

	if (current.value === value) {
		i += 1;
		return i;
	} else {
		return null;
	}
}

// Return the whole list to a string readable format
// Working
function toString(list) {
	console.log("Converting toString" /*, JSON.stringify(list, null, 4)*/);

	let string = "";
	let current = list;

	while (current !== null) {
		string += "( " + current.value + " ) -> ";
		current = current.nextNode;
	}

	string += null;
	return string;
}

function test() {
	let prova0 = null;
	prova0 = append(prova0, "4a");
	prova0 = prepend(prova0, "3c");
	prova0 = prepend(prova0, "2b");
	prova0 = append(prova0, "5d");
	console.log(head(prova0));
	console.log();

	console.log(toString(prova0));
	console.log();

	console.log(contains(prova0, "5d"));
	console.log();
	console.log(find(prova0, "5d"));
	console.log();

	pop(prova0);
	console.log(toString(prova0));
	console.log();

	console.log(size(prova0));
	console.log();

	console.log(tail(prova0));
	console.log();

	console.log(at(prova0, 1));
	console.log();
	console.log(contains(prova0, "5d"));
	console.log();
	console.log(find(prova0, "5d"));
}

test();
