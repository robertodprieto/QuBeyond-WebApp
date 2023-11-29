import { SORTING_ORDER } from '@/models/business-models';

export function sortArray<T>(unsortedArray: T[], key: keyof T, order: SORTING_ORDER): T[] {
  return unsortedArray.slice().sort((a, b) => {
    if (a[key] < b[key]) {
      return order === SORTING_ORDER.Ascending ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return order === SORTING_ORDER.Ascending ? 1 : -1;
    }
    return 0;
  });
}
