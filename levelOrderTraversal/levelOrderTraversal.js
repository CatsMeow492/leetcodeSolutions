function levelOrderTraversal(input) {
  let solution = [];
  let queue = [];
  queue.push(input);
  while (queue.length > 0) {
    let node = queue.shift();
    solution.push(node.val);
    node.children.forEach(function (child) {
      queue.push(child);
    });
  }
  return solution;
}
