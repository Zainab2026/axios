// insert element at the position index
// of the list
insertAt(element, index)
{
	if (index < 0 || index > this.size)
		return console.log("Please enter a valid index.");
	else {
		// creates a new node
		let node = new Node(element);
		let curr, prev;

		curr = this.head;

		// add the element to the
		// first index
		if (index == 0) {
			node.next = this.head;
			this.head = node;
		} else {
			curr = this.head;
			let it = 0;

			// iterate over the list to find
			// the position to insert
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}

			// adding an element
			node.next = curr;
			prev.next = node;
		}
		this.size++;
	}
}
