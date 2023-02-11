import { selectionSort } from "@/pages/selection";

describe("Check order of items after sort", () => {
  test("Unsorted array", () => {
    expect(selectionSort([3, 2, 1, 4], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Sorted array", () => {
    expect(selectionSort([4, 3, 2, 1], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Empty array", () => {
    expect(selectionSort([], 4)).toEqual([]);
  });
});
