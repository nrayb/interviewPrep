import { LinkedListNode } from "./2types";

// implement an algorithm to delete a node given only access to the node to delete.

// Questions that I would ask
// 1. I want to double check that we have the same reference in terms of what a LL looks like.
//      - So i would draw out the interface (value and next)
// 2. I would want to clarify the inputs of the function
//      - in a linked list a-b-c-d-e and we want to remove b, does that mean I get b passed in?

// First obvious answer that comes to mind, is to just shift the values
// In this case, the node doesn't really mean anything, so simply overriting the value should be sufficient.
// I can't access the node before hand, so I can;t really just do the normal node.next = node.next.next trick.

// 3. Can I assume that the inputs and the LL are always valid?

export function deleteSpecificNode(nodeToDelete: LinkedListNode) {
  let currNode = nodeToDelete;
  while (currNode && currNode.next) {
    currNode.value = currNode.next.value
    if (!currNode.next.next) {
      currNode.next = null;
    }
    currNode = currNode.next;
  }
}

// With this implementation in mind, I would like to test some basic, and some edge cases.
// Cases that I would want to test:
// I'll start with the original example of a-b-c-d-e and we get the input b
// we get passed a single node: a
// After thinking about it, this actually cannot be solved. We can't delete the object reference from the previous node
// I gave up and looked at the answer sheet, and this infact was the case.
// I didn't even read the question carefully, it specifically stated that the input cannot be the 1st or last node
// Ofcourse it's bad that I didn't even read it properly, but it's good that I was able to think through this process.

// Takeaways:
// - Read the question more carefully!

// I made a booboo
// After writing the test, I realized I made another mistake.....
// the function actually throws in the end because the while loop assumes that currNode is not undefined!

// BIGGER TAKEAWAY
// - Go through your example till the end!!
