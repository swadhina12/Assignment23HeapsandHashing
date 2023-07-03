//Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.

function calculateDepth(preorder) {
  let index = 0;

  // Recursive function to calculate depth
  function calculateDepthHelper() {
    if (index >= preorder.length) {
      return 0;
    }

    // If it's a leaf node, return 0
    if (preorder[index] === 'l') {
      return 0;
    }

    // Increment index for internal node
    index++;

    // Recursively calculate depth of left and right subtree
    const leftDepth = calculateDepthHelper();
    const rightDepth = calculateDepthHelper();

    // Return the maximum depth of left and right subtree + 1
    return Math.max(leftDepth, rightDepth) + 1;
  }

  // Call the helper function and return the result
  return calculateDepthHelper();
}

// Example usage
const preorder1 = 'nlnll';
const depth1 = calculateDepth(preorder1);
console.log(depth1); // Output: 2

const preorder2 = 'nlnnlll';
const depth2 = calculateDepth(preorder2);
console.log(depth2); // Output: 3
