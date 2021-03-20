import { deleteSpecificNode } from "../src/2dot3";
import { LinkedListNode } from "../src/2types";

describe("test deleteSpecificNode ", () => {
  it("base case (1-2-3-4-5) input is 2", () => {
    const testNode: LinkedListNode = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5
            }
          }
        }
      }
    };
    expect(() => deleteSpecificNode(testNode.next)).not.toThrow();
    expect(testNode.value).toEqual(1);
    expect(testNode.next.value).toEqual(3);
    expect(testNode.next.next.value).toEqual(4);
    expect(testNode.next.next.next.value).toEqual(5);
    expect(testNode.next.next.next.next).toBeFalsy();
  });
});