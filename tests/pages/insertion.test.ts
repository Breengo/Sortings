import { insertionSort } from "@/pages/insertion";

describe("Check order of items after sort", () => {
  test("Unsorted array", () => {
    expect(insertionSort([3, 2, 1, 4], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Sorted array", () => {
    expect(insertionSort([4, 3, 2, 1], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Empty array", () => {
    expect(insertionSort([], 4)).toEqual([]);
  });
});
