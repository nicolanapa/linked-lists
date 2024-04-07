class Node {
	constructor(value) {
		this.value = value;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.list = null;
	}

	// Appends it at the end of a list
	// Working
	append(value) {
		console.log("Appending", value);

		let new_node = new Node(value);

		if (this.list === null) {
			this.list = new_node;
		} else {
			let last = this.list;

			while (last.nextNode !== null) {
				last = last.nextNode;
			}

			last.nextNode = new_node;
		}

		return this.list;
	}

	// Prepends it at the start of a list
	// Working
	prepend(value) {
		console.log("Prepending", value);

		let new_node = new Node(value);
		new_node.nextNode = this.list;
		this.list = new_node;

		return this.list;
	}

	// Returns the size of a list
	// Working
	size() {
		console.log("Calculating size...");

		let i = 0;
		let current = this.list;

		while (current !== null) {
			i += 1;
			current = current.nextNode;
		}

		return i;
	}

	// Returns the head (first node) of a list
	// Working
	head() {
		console.log("Returning head (", this.list.value, ")");

		return this.list.value;
	}

	// Returns the tail (last node) of a list
	// Working
	tail() {
		console.log("Returning tail...");
		let current = this.list;

		while (current.nextNode !== null) {
			current = current.nextNode;
		}

		return current.value;
	}

	// Returns the node (value) at a specific index of a list
	// Working
	at(index) {
		console.log("Returning your node at", index);

		let current = this.list;
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
	pop() {
		console.log("Removing last element...");
		let current = this.list;

		while (current.nextNode.nextNode !== null) {
			current = current.nextNode;
		}

		console.log("Removed:", current.nextNode.value);
		current.nextNode = null;

		return current;
	}

	// Returns true if a list contains a given value, otherwise false
	// Working
	contains(value) {
		console.log("Checking if it contains:", value);

		let current = this.list;

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
	// 0 to i
	// Working
	find(value) {
		console.log("Finding:", value);

		let i = -1;
		let current = this.list;

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
	toString() {
		console.log("Converting toString" /*, JSON.stringify(this.list, null, 4)*/);

		let string = "";
		let current = this.list;

		while (current !== null) {
			string += "( " + current.value + " ) -> ";
			current = current.nextNode;
		}

		string += null;
		return string;
	}
}

function test() {
	let prova0 = new LinkedList();

	prova0.append("4a");
	prova0.prepend("3c");
	prova0.prepend("2b");
	prova0.append("5d");
	console.log(prova0.head());
	console.log();

	console.log(prova0.toString());
	console.log();

	console.log(prova0.contains("5d"));
	console.log();
	console.log(prova0.find("5d"));
	console.log();

	prova0.pop();
	console.log(prova0.toString());
	console.log();

	console.log(prova0.size());
	console.log();

	console.log(prova0.tail());
	console.log();

	console.log(prova0.at(1));
	console.log();
	console.log(prova0.contains("5d"));
	console.log();
	console.log(prova0.find("5d"));
}

test();
