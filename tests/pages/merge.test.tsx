import { mergeSort } from "@/pages/merge";

describe("Check order of items after sort", () => {
  it("Unsorted array", async () => {
    await expect(mergeSort([3, 2, 1, 4])).resolves.toEqual([4, 3, 2, 1]);
  });
  it("Sorted array", async () => {
    await expect(mergeSort([4, 3, 2, 1])).resolves.toEqual([4, 3, 2, 1]);
  });
  it("Empty array", async () => {
    await expect(mergeSort([])).resolves.toEqual([]);
  });
});
