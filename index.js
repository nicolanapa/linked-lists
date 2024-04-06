class Node {
	constructor(value /*, nextNode*/) {
		this.value = value;
		this.nextNode = null;

		console.log("Node:", this.value, this.nextNode);
	}
}

/*constructor(value, nextNode) {
		if (value !== null) {
			if (nextNode === null) {
				this.value = value;
				this.nextNode = nextNode;
			} else {
				this.nextNode = nextNode;
				let temp = this.nextNode;
				if (temp.nextNode === null || temp.nextNode === undefined) {
					return new Node(value, (temp.nextNode = null));
				} else {
					while (temp !== null || temp !== undefined) {
						temp = temp.nextNode;
					}
					this.value = value;
					temp.nextNode = null;

					return new Node(this.value, temp.nextNode);
				}
			}
		} else {
			this.value = null;
			this.nextNode = null;
		}

		new Node(this.value, this.nextNode);
	}*/

// End of list
/*append(value) {
		console.log("Appending...");

		//return new Node(value);

		let temp = this.nextNode;

		while (temp !== null || temp !== undefined) {
			temp = temp.nextNode;
		}

		if (this.nextNode.nextNode === null || this.nextNode.nextNode === undefined) {
			return new Node(value, null);
		} else {
			temp = temp.nextNode;
			return new Node(value, temp);
		}
	}*/

// Start of list
function prepend(head, value) {
	console.log("Prepending...");

	let newNode = new Node(value);
	newNode.next = head[0];
	head[0] = newNode;
}

function size() {}

function head(list) {
	console.log("Returning head...");

	return console.log(list.value);
}

function tail() {}

function at(index) {}

//set pop() {}

function contains(value) {}

function find(value) {}

function toString(list) {
	console.log("Converting toString...");

	let string = "";
	let temp = list;
	while (temp !== null) {
		string += "( " + temp.value + " ) -> ";
		temp = temp.nextNode;
	}
	//temp = temp.value;
	/*if (temp === null || temp === undefined) {
			string += null;
		} else {
			string += temp + " (This shouldn't happen!)";
		}*/
	string += null;
	console.log(string);
}

let prova0 = [null];
//prova0.append("prova2");
prepend(prova0, "prova2");
prepend(prova0, "prova1");
prepend(prova0, "prova0");

head(prova0[0]);
toString(prova0[0]);
