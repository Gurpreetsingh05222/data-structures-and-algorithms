class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLikedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	//Pushing values to the list
	push(val){
		let newNode = new Node(val);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		}else{
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop(){
		if(!head) return undefined;
		let poppedNode = this.tail;
		if(this.length === 1){
			this.head= null;
			this.tail = null;
		}else{
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
}