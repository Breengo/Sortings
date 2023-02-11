import { countingSort } from "@/pages/counting";

describe("Check order of items after sort", () => {
  test("Unsorted array", () => {
    expect(countingSort([3, 2, 1, 4], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Sorted array", () => {
    expect(countingSort([4, 3, 2, 1], 4)).toEqual([4, 3, 2, 1]);
  });
  test("Empty array", () => {
    expect(countingSort([], 4)).toEqual([]);
  });
});
