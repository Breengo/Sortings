import { bubbleSort } from "@/pages/bubble";

describe("Check order of items after sort", () => {
  test("Unsorted array", () => {
    expect(bubbleSort([3, 2, 1, 4], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Sorted array", () => {
    expect(bubbleSort([4, 3, 2, 1], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Empty array", () => {
    expect(bubbleSort([], 4)).toEqual([]);
  });
});
