describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should not iterate over the entire tree when running contains', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(10);

    binarySearchTree.operations.count = 0;
    binarySearchTree.contains(3);
    let operations = binarySearchTree.operations.count;
    expect(operations).to.equal(3);

    binarySearchTree.operations.count = 0;
    binarySearchTree.contains(10);
    operations = binarySearchTree.operations.count;
    expect(operations).to.equal(3);

    binarySearchTree.operations.count = 0;
    binarySearchTree.contains(7);
    operations = binarySearchTree.operations.count;
    expect(operations).to.equal(2);
  });

  it('should log an entire layer before going to the next layer', function () {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(1);
    binarySearchTree.insert(10);

    expect(binarySearchTree.breadthFirstLog()).to.eql([5, 2, 7, 1, 3, 6, 10]);
  });



  it('should rebalance when the depth ratio > 2', function() {
    binarySearchTree.value = 10;
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(0);

    let depthRatio = (binarySearchTree.getDepth()['maxDepth']) / (binarySearchTree.getDepth()['minDepth']);
    // console.log('before balance', depthRatio);
    binarySearchTree.rebalance();
    depthRatio = (binarySearchTree.getDepth()['maxDepth']) / (binarySearchTree.getDepth()['minDepth']);
    // console.log('after balance', depthRatio);
    // console.log(binarySearchTree.getDepth());
    expect(depthRatio < 2).to.equal(true);
  });
});
