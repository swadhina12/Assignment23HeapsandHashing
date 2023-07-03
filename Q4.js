//Given a Binary Tree, The task is to print the **bottom view** from left to right. A node **x** is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.hd = 0; // Horizontal distance
    }
  }
  
  function printBottomView(root) {
    if (root === null) return;
  
    const queue = [];
    const map = new Map(); // Map to store nodes at each horizontal distance
  
    // Enqueue the root node with horizontal distance 0
    queue.push(root);
  
    while (queue.length > 0) {
      const node = queue.shift();
      const hd = node.hd;
  
      // Update the map with the latest node at the current horizontal distance
      map.set(hd, node.value);
  
      // Enqueue the left and right children with updated horizontal distance
      if (node.left) {
        node.left.hd = hd - 1;
        queue.push(node.left);
      }
      if (node.right) {
        node.right.hd = hd + 1;
        queue.push(node.right);
      }
    }
  
    // Print the values from the map in ascending order of horizontal distance
    for (const value of map.values()) {
      console.log(value);
    }
  }
  
  // Create a binary tree
  const tree = new Node(20);
  tree.left = new Node(8);
  tree.right = new Node(22);
  tree.left.left = new Node(5);
  tree.left.right = new Node(3);
  tree.right.right = new Node(25);
  tree.left.right.left = new Node(10);
  tree.left.right.right = new Node(14);
  
  // Print the bottom view of the binary tree
  printBottomView(tree); // Output: 5 10 3 14 25
  
  // Create another binary tree
  const tree2 = new Node(20);
  tree2.left = new Node(8);
  tree2.right = new Node(22);
  tree2.left.left = new Node(5);
  tree2.left.right = new Node(3);
  tree2.right.left = new Node(4);
  tree2.right.right = new Node(25);
  tree2.left.right.left = new Node(10);
  tree2.left.right.right = new Node(14);
  
  // Print the bottom view of the binary tree
  printBottomView(tree2); // Output: 5 10 4 14 25
  