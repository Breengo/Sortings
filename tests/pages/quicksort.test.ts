import { quickSort } from "@/pages/quicksort";

describe("Check order of items after sort", () => {
  it("Unsorted array", async () => {
    await expect(quickSort([3, 2, 1, 4])).resolves.toEqual([4, 3, 2, 1]);
  });
  it("Sorted array", async () => {
    await expect(quickSort([4, 3, 2, 1])).resolves.toEqual([4, 3, 2, 1]);
  });
  it("Empty array", async () => {
    await expect(quickSort([])).resolves.toEqual([]);
  });
});
