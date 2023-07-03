//Given a Binary Tree, print the Right view of it.

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function printRightView(root) {
    if (root === null) return;
  
    const queue = [];
    queue.push({ node: root, level: 0 });
    const rightView = [];
  
    while (queue.length > 0) {
      const { node, level } = queue.shift();
  
      // Update the rightmost node at each level
      rightView[level] = node.value;
  
      // Process the left and right children if they exist
      if (node.left) {
        queue.push({ node: node.left, level: level + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, level: level + 1 });
      }
    }
  
    // Print the right view of the binary tree
    console.log(rightView.join(' '));
  }
  
  // Create a binary tree
  const tree = new Node(1);
  tree.left = new Node(2);
  tree.right = new Node(3);
  tree.left.left = new Node(4);
  tree.left.right = new Node(5);
  tree.right.left = new Node(6);
  tree.right.right = new Node(7);
  tree.right.right.right = new Node(8);
  
  // Print the right view of the binary tree
  printRightView(tree); // Output: 1 3 7 8
  
  // Create another binary tree
  const tree2 = new Node(1);
  tree2.left = new Node(8);
  tree2.left.left = new Node(7);
  
  // Print the right view of the binary tree
  printRightView(tree2); // Output: 1 8 7
  