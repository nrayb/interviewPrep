import { LinkedListNode } from "./2types";

export function removeDumplicate(firstNode?: LinkedListNode) {
    const appearanceMap: {[key: number]: boolean} = {};
    let prev: LinkedListNode = { value: 0, next: firstNode };
    while (prev.next) {
        if (appearanceMap[prev.next.value]) {
            prev.next = prev.next.next;
        } else {
            appearanceMap[prev.next.value] = true;
            prev = prev.next;
        }
    }

}

export function removeDumplicateWithoutBuffer(firstNode?: LinkedListNode) {
    let currNode = firstNode;
    while (currNode && currNode.next) {
        let node2 = currNode;
        while (node2.next) {
            if (node2.next.value === currNode.value) {
                node2.next = node2.next.next;
            } else {
                node2 = node2.next;
            }
        }
        currNode = currNode.next;
    }
}

/**
 * Notes for myself in terms of what I need to do better after writing the tests
 * 1. Test edge cases better
 *      - I didn't catch the case that the node that was passed in was undefined
 *      - I also didn't catch the case that the node has repeating values.
 * 2. Think back to more language specific features
 *      - I made a mistake doing "currNode.next !== null"
 *      - I should have known better not to do that and double check what the end of a LL looked like
 *      - In my defined interface, a LL terminated at `undefined` which is `!== null`
 * 3. Ask better questions
 *      - I made an assumption in the verry begining that the input would be undefined
 *      - I should verify things like these right away
 * 4. I THINK MOST IMPORTANTLY, don't half-ass your practice
 *      - I did relatively well on the first part, but kind of bombed the second part....
 *      - I was half-assing it and clearly it showed as I wrote the tests.
 *
 * Good questions to start up with:
 * 1. Can I assume that the input will always be defined?
 * 2. What do you want the function to return?
 *      - This would be a good time to flex a little bit of knowledge about functional vs OO programming
 * 3. Validate what the interface looks like.
 */
