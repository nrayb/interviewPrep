import { getKthElementInLinkedList } from "../src/2dot2";

describe("getKthElementInLinkedList ", () => {
  test("handles undefined LLNode", () => {
    expect(() => getKthElementInLinkedList(undefined, 1)).not.toThrow();
    expect(getKthElementInLinkedList(undefined, 1)).toEqual(undefined);
  });

  test("handles 0 as k value", () => {
    expect(() => getKthElementInLinkedList({ value: 1}, 0)).not.toThrow();
    expect(getKthElementInLinkedList({ value: 1}, -1)).toEqual(undefined);
  });

  test("handles negative number as k value", () => {
    expect(() => getKthElementInLinkedList({ value: 1}, -1)).not.toThrow();
    expect(getKthElementInLinkedList({ value: 1}, -1)).toEqual(undefined);
  });

  test("handles k value which is too long for linkedList length", () => {
    expect(() => getKthElementInLinkedList({ value: 1}, 2)).not.toThrow();
    expect(getKthElementInLinkedList({ value: 1}, 2)).toEqual(undefined);
  });

  test("handles a linked list with one node (1)", () => {
    expect(getKthElementInLinkedList({ value: 1}, 1)).toEqual(1);
  });

  test("handles a regular linkedListNode with k=1", () => {
    const testNode = {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
            }
          }
        }
      }
    };
    expect(getKthElementInLinkedList(testNode, 1)).toEqual(1);
  });

  test("handles a regular linkedListNode with k=2", () => {
    const testNode = {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
            }
          }
        }
      }
    };
    expect(getKthElementInLinkedList(testNode, 2)).toEqual(2);
  });

  test("handles a regular linkedListNode with k=3", () => {
    const testNode = {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
            }
          }
        }
      }
    };
    expect(getKthElementInLinkedList(testNode, 3)).toEqual(3);
  });

  test("handles a regular linkedListNode with k=4", () => {
    const testNode = {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
            }
          }
        }
      }
    };
    expect(getKthElementInLinkedList(testNode, 4)).toEqual(4);
  });

  test("handles a regular linkedListNode with k=5", () => {
    const testNode = {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
            }
          }
        }
      }
    };
    expect(getKthElementInLinkedList(testNode, 5)).toEqual(5);
  });
});
