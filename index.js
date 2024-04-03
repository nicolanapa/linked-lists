class Node {
	constructor(value, nextNode) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

class LinkedList {
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
	append(value) {
		console.log("Appending...");

		if (this.nextNode === null || this.nextNode === undefined) {
			return new Node(value, null);
		}

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
	}

	// Start of list
	prepend(value) {
        console.log("Prepending...");
        
        new Node(value, null);
    }

	get size() {}

	get head() {}

	get tail() {}

	at(index) {}

	//set pop() {}

	contains(value) {}

	find(value) {}

	get toString() {
		console.log("Converting toString...");

		let string = "";
		let temp = this;
		while (temp != null) {
			string += "( " + temp.value + " ) -> ";
            temp = temp.nextNode;
		}
		//temp = temp.value;
		if (temp === null || temp === undefined) {
			string += null;
		} else {
			string += temp + " (This shouldn't happen!)";
		}

		console.log("toString:", string);
	}
}

let prova0 = new LinkedList();
prova0.append("prova2");
prova0.prepend("prova1");
//prova0.Node.append = "prova3";
//console.log(prova0.nextNode);
//console.log(prova0.append("ciao"));
//console.log(new Node("apple", "frutta1"));
//console.log(new Node(null, null));
prova0.toString;