//Given a Binary tree, the task is to print the **left view** of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function printLeftView(root) {
    if (root === null) return;
  
    const queue = [];
    queue.push({ node: root, level: 0 });
    const leftView = [];
  
    while (queue.length > 0) {
      const { node, level } = queue.shift();
  
      // Add the leftmost node at each level to the left view array
      if (leftView.length === level) {
        leftView.push(node.value);
      }
  
      // Process the left and right children if they exist
      if (node.left) {
        queue.push({ node: node.left, level: level + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, level: level + 1 });
      }
    }
  
    // Print the left view of the binary tree
    console.log(leftView.join(' '));
  }
  
  // Create a binary tree
  const tree = new Node(4);
  tree.left = new Node(5);
  tree.right = new Node(2);
  tree.right.left = new Node(3);
  tree.right.right = new Node(1);
  tree.right.left.left = new Node(6);
  tree.right.left.right = new Node(7);
  
  // Print the left view of the binary tree
  printLeftView(tree); // Output: 4 5 3 6
  
  // Create another binary tree
  const tree2 = new Node(1);
  tree2.left = new Node(2);
  tree2.right = new Node(3);
  tree2.left.right = new Node(4);
  tree2.left.right.right = new Node(5);
  tree2.left.right.right.right = new Node(6);
  
  // Print the left view of the binary tree
  printLeftView(tree2); // Output: 1 2 4 5 6
  