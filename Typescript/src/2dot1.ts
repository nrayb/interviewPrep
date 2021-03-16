import { LinkedListNode } from "./2types";

export function removeDumplicate(firstNode: LinkedListNode) {
    const appearanceMap: {[key: number]: boolean} = {};
    let prev: LinkedListNode = { value: 0, next: firstNode };
    while (prev.next !== null) {
        if (appearanceMap[prev.next.value]) {
            prev.next = prev.next.next;
        } else {
            appearanceMap[prev.next.value] = true;
            prev = prev.next;
        }
    }

}

export function removeDumplicateWithoutBuffer(firstNode: LinkedListNode) {
    let currNode = firstNode;
    while (currNode.next !== null) {
        let node2 = currNode;
        while (node2.next !== null) {
            if (node2.next.value === currNode.value) {
                node2.next = node2.next.next;
            } else {
                node2 = node2.next;
            }
        }
        currNode.next = currNode.next.next;
    }
}
