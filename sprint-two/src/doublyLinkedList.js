var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    newNode.previous = list.tail;
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let oldHeadValue = list.head.value;
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
      return oldHeadValue;
    }
    if (list.head.next !== null) {
      list.head = list.head.next;
    }
    list.head.previous = null;
    return oldHeadValue;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }
    //base case-
    let result = false;

    let recursor = function(node) {
      if (node === undefined) {
        return;
      }
      if (node.value === target) {
        result = true;
      }
      if (node.next === null) {
        return;
      }
      recursor(node.next);
    };

    recursor(list.head);
    return result;
  };

  list.addToHead = function(value) {
    if (list.head === null) {
      let newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else {
      let oldHead = list.head;
      let newNode = Node(value);
      list.head = newNode;
      list.head.next = oldHead;
      oldHead.previous = newNode;
    }
  };

  list.removeTail = function() {
    if (list.head === null && list.tail === null) {
      return 'cannot remove a tail-less tail!';
    }
    list.tail = list.tail.previous;
    list.tail.next = null;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};