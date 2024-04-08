import { Node, LinkedList } from "./nodeLinkedList.js";

function test() {
	let prova0 = new LinkedList();

	prova0.append("4a");
	prova0.prepend("3b");
	prova0.prepend("2c");
	prova0.append("5d"); // Removed
	console.log(prova0.head());
	console.log();

	console.log(prova0.toString());
	console.log();

	console.log(prova0.contains("5d"));
	console.log();
	console.log(prova0.find("5d"));
	console.log();

	prova0.pop(); // Remove "5d"
	console.log(prova0.toString());
	console.log();

	console.log(prova0.size());
	console.log();

	console.log(prova0.tail());
	console.log();

	console.log(prova0.at(1));
	console.log();

	prova0.append("7e");
	prova0.insertAt("5f", 3);
	prova0.insertAt("6g", 4);
	console.log(prova0.contains("5d"));
	console.log();
	console.log(prova0.toString());
	console.log();
	prova0.removeAt(3);
	console.log(prova0.find("5f"));
	console.log(prova0.toString());
	console.log(prova0.size());
	console.log();
}

test();
