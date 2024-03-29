var LinkedList = function() { //testComment
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
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
    list.head = list.head.next;
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};

