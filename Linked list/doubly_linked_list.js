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

	shift(){
		if(this.length === 0) return undefined;
		let oldHead = this.head;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}else{
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val){
		let newNode = new Node(val);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		}else{
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index){
		if(index < 0 || index >= this.length) return undefined;
		if(index <= this.length/2){
			let count = 0;
			let current = this.head;
			while(count != index){
				current = current.next;
				count++;
			}
		}else{
			count = this.length - 1;
			current = this.tail;
			while(count != index){
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	set(index, val){
		let nodeFound = this.get(index);
		if(nodeFound != null){
			nodeFound.val = val;
			return true;
		}
		return false;
	}
}

let list = new  DoublyLikedList();

