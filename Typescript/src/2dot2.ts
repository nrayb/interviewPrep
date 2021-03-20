import { LinkedListNode } from "./2types";

// Find k-th to the last element of a singly-linked list

/**
 * Start off by asking questions
 * These are the questions I would ask to double check I understand the questions
 * 1. I want to ensure I understand what you mean by k-th to the last?
 *    - So in an example of a LL of 1-2-3-4-5. is 2nd to the last then 4?
 *    - (Let's assume the interviewer says yes.)
 * 2. Can I assume that I will always get proper inputs? i.e. LLNode is defined and Kth-number is defined?
 *    - Lets assume interviewer says no for LLNode but yes for k-value
 * 3. I want to ensure we're on the same page for what a LLNode looks like
 *    - Write out the interface and make sure you're in agreement
 * 4. And for the return statement, do you want the node in itself? or the value?
 *    - let's assume the interviewer says value
 * 5. Can I assume that the length of the LL is always greater than K?
 *    - Let's assume interviewer says no
 *    - Follow up question:
 *      - What do you want me to return if K is larger than length of LL?
 *          - Let's assume interviewer says we can return undefined
 * I think I can get started for now
 */

export function getKthElementInLinkedList(firstNode: LinkedListNode | undefined, kIndex: number): number | undefined {
  if (!firstNode || kIndex <= 0) {
    return undefined;
  }

  let startPointer = firstNode;
  let endPointer = firstNode;
  let distanceFromPointers = 0;

  while (distanceFromPointers < kIndex - 1) {
    if (endPointer.next) {
      endPointer = endPointer.next;
      distanceFromPointers++;
    } else {
      return undefined;
    }
  }

  while (endPointer.next) {
    endPointer = endPointer.next;
    startPointer = startPointer.next;
  }

  return startPointer.value;
 }

 /**
  * I think to start with, this answer should generally be okay, but let's go through some conditions and exmples to make sure.
  * 1. I want to make sure that this function doesn't throw
  *   - Here I double checked if I was handling the firstNode = undefined case, and I wasn't; I fixed that
  *   - I also double checked if I was handling values for kIndex properly, which I wasn't; I fixed that.
  * 2. Now let's go through an example
  *   - single node
  *     input: { value: 1 }, 1
  *   - normal case
  *     input 1-2-3-4-5, 2
  * 3. Looks good. I'm happy with the answer
  */

 /**
  * While writing the test, I found this issue:
  * 1. I didn't handle the case where the LLNode was undefined but the k = 1
  *    - I had to fix it by adding it to the top level checks
  */

 /**
  * Take away:
  * 1. Should I just always do null checks on the while loops?
  *   - I don't think I should be too aggresive about it, coz it might look bad.
  *   - So when is it necesary?
  *     - It;s necessary for top level while loops when the LLNode can be undefined.
  * 2. Be more thorough with checking edge cases
  *   - Be especially careful when there are two inputs, and you cover all bad cases
  *   - i.e. (bad1, good2) (good1, bad2) (bad1, bad2)
  */

// So after writing this, I looked into the solution in the book, and their default solution was recursive.
// Since I'm not very good with recursion, I think this would be a good way to visit them

// Let's first limit our exposure to recursion to the scope of linkedLists.
// When traversing through a linked list through recusion, in general we do something like this:
export function recursivelyTraverseThroughEntireLinkedList(head: LinkedListNode) {
  if (head.next) {
    recursivelyTraverseThroughEntireLinkedList(head.next);
  }
}

// So now if we want to let's say add all the values in a linkedList, we then do something like this:
export function addAllValuesInLinkedListRecursively(head: LinkedListNode | undefined): number {
  if (!head) {
    return 0;
  }
  return head.value + addAllValuesInLinkedListRecursively(head.next);
}
// So when thinking about this solution, I had to be very careful to make sure I consider the edge values and that I process them properly.
// My first solution only processed the head.next value which meant that we wouldn't have gotten the value of the very head of the LinkedList
// Okay so recursion in LinkedLists is actually not too bad.

// okay so now let's try to solve the original problem...
export function recursivelyReturnKthValue(head: LinkedListNode | undefined, k: number): number {
  if (!head) {
    return 0;
  }
  const position =  1 + recursivelyReturnKthValue(head.next, k);
  if (position === k) {
    console.log(head.value);
  }
  return position;
}

// So this is a bit cheating since I kind of saw the solution and I was drawing inspiration from that on the back of my mind, but the path to the
// solution wasn't too bad. I kind of understood what was going on, where I understood what I was doing during the recursion.
// I think if this was a real problem, I would have struggled a little bit with the idea of returning something