class LinkedList {
	constructor(value, nextNode) {
        if (this.nextNode === undefined || this.nextNode === null) {
            console.log(nextNode);
        }

        /*
            Head ?
        */
	}
}

class Node {
	constructor(value, nextNode) {
		if (value !== null) {
            if (nextNode === null) {
                this.value = value;
                this.nextNode = nextNode;
                this.nextNode.nextNode = null;
            } else {
                this.value = value;
                this.nextNode = nextNode;
            }

			
		} else {
            this.value = null;
		    this.nextNode = null;
        }
		
	}

	// End of list
	append(value) {
		while (this.nextNode !== null) {
			if (this.nextNode.nextNode === null || this.nextNode.nextNode === undefined) {
				return new Node(value, null);
			} else {
				this.nextNode = this.nextNode.nextNode;
			}
		}
	}

	// Start of list
	prepend(value) {}

    get size() {}

    get head() {}

    get tail() {}

    at(index) {}

    //set pop() {}

    contains(value) {}

    find (value) {}

    toString() {
        //while (this.nextNode)
    }
}

let prova1 = new Node("1", "prova");
console.log(prova1.nextNode);
console.log(prova1.append("ciao"));
console.log(new Node("apple", "frutta1"));
console.log(new Node(null, null));
console.log(prova1.toString());