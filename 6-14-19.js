// * Linked Lists

// ** Split
function split(nums) {
  let currentNode = nums.head;
  while (currentNode.next) {
    if (currentNode.next.value < 0) {
      let temp = currentNode.next;
      currentNode.next = temp.next;
      temp.next = nums.head;
      nums.head = temp;
    } else {
      currentNode = currentNode.next;
    }
  }
  nums.tail = currentNode;
  return nums;
}
