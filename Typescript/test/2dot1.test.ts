import { LinkedListNode } from "../src/2types";
import {
    removeDumplicate,
    removeDumplicateWithoutBuffer,
} from "../src/2dot1";

function validateNoDuplicates(firstNode: LinkedListNode): boolean {
    const appearanceMap: {[key: number]: boolean} = {};
    const prevNode: LinkedListNode = { value: 0, next: firstNode };
    while (prevNode.next) {
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
    test(" tested with no input", () => {
        expect(() => removeDumplicate()).not.toThrow();
    });

    test(" tested with one node (1)", () => {
        const testNode: LinkedListNode = {
            value: 1
        };
        expect(() => removeDumplicate(testNode)).not.toThrow();
    });

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
        expect(testNode.next).toBeFalsy();
        expect(validateNoDuplicates(testNode)).toBeTruthy();
    });

    test(" tested with input 1-2-1-2-3-4-5", () => {
        const testNode: LinkedListNode = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 1,
                    next: {
                        value: 2,
                        next: {
                            value: 3,
                            next: {
                                value: 4,
                                next: {
                                    value: 5,
                                }
                            }
                        }
                    }
                }
            }
        };
        removeDumplicate(testNode);
        expect(testNode.value).toEqual(1);
        expect(testNode.next.value).toEqual(2);
        expect(testNode.next.next.value).toEqual(3);
        expect(testNode.next.next.next.value).toEqual(4);
        expect(testNode.next.next.next.next.value).toEqual(5);
        expect(testNode.next.next.next.next.next).toBeFalsy();
        expect(validateNoDuplicates(testNode)).toBeTruthy();
    });
});

describe("removeDumplicateWithoutBuffer", () => {
    test(" tested with no input", () => {
        expect(() => removeDumplicateWithoutBuffer()).not.toThrow();
    });

    test(" tested with one node (1)", () => {
        const testNode: LinkedListNode = {
            value: 1
        };
        expect(() => removeDumplicateWithoutBuffer(testNode)).not.toThrow();
    });

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
        expect(testNode.next).toBeFalsy();
        expect(validateNoDuplicates(testNode)).toBeTruthy();
    });

    test(" tested with input 1-2-1-2-3-4-5", () => {
        const testNode: LinkedListNode = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 1,
                    next: {
                        value: 2,
                        next: {
                            value: 3,
                            next: {
                                value: 4,
                                next: {
                                    value: 5,
                                }
                            }
                        }
                    }
                }
            }
        };
        removeDumplicateWithoutBuffer(testNode);
        expect(testNode.value).toEqual(1);
        expect(testNode.next.value).toEqual(2);
        expect(testNode.next.next.value).toEqual(3);
        expect(testNode.next.next.next.value).toEqual(4);
        expect(testNode.next.next.next.next.value).toEqual(5);
        expect(testNode.next.next.next.next.next).toBeFalsy();
        expect(validateNoDuplicates(testNode)).toBeTruthy();
    });
});