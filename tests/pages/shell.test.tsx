import { shellSort } from "@/pages/shell";

describe("Check order of items after sort", () => {
  test("Unsorted array", () => {
    expect(shellSort([3, 2, 1, 4], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Sorted array", () => {
    expect(shellSort([4, 3, 2, 1], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Empty array", () => {
    expect(shellSort([], 4)).toEqual([]);
  });
});
