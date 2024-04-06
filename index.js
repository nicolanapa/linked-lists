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

	while (current.next !== null) {
		current = current.next;
	}

	return current.value;
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

	return current.value;
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

// Returns true if a list contains a given value, otherwise false
// Working
function contains(list, value) {
	console.log("Checking if it contains:", value);

	let current = list;

	while (current.next !== null) {
		if (current.value === value) {
			return true;
		}
		current = current.next;
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

	while (current.next !== null) {
		i += 1;

		if (current.value === value) {
			return i;
		}
		current = current.next;
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
		current = current.next;
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
