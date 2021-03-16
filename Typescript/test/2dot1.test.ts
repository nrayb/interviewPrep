import { LinkedListNode } from "../src/2types";
import {
    removeDumplicate,
    removeDumplicateWithoutBuffer,
} from "../src/2dot1";

function validateNoDuplicates(firstNode: LinkedListNode): boolean {
    const appearanceMap: {[key: number]: boolean} = {};
    const prevNode: LinkedListNode = { value: 0, next: firstNode };
    while (prevNode.next !== null) {
        if (appearanceMap[prevNode.next.value]) {
            return false;
        } else {
            appearanceMap[prevNode.next.value] = true;
            prevNode.next = prevNode.next.next;
        }
    }
    return true;
}

describe("removeDumplicate", () => {
    test(" tested with input 1-1-1", () => {
        const testNode: LinkedListNode = {
            value: 1,
            next: {
                value: 1,
                next: {
                    value: 1
                }
            }
        };
        removeDumplicate(testNode);
        expect(testNode.next).toBeFalsey();
        expect(validateNoDuplicates(testNode)).toBeTruthy();
    });
});

describe("removeDumplicateWithoutBuffer", () => {
    test(" tested with input 1-1-1", () => {
        const testNode: LinkedListNode = {
            value: 1,
            next: {
                value: 1,
                next: {
                    value: 1
                }
            }
        };
        removeDumplicateWithoutBuffer(testNode);
        expect(testNode.next).toBeFalsey();
        expect(validateNoDuplicates(testNode)).toBeTruthy();
    });
});