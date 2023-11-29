import { expect, it, describe } from 'vitest';
import { sortArray } from '../src/utils/array';
import { SORTING_ORDER } from '../src/models/business-models';

describe('Array.ts', () => {
  it('should sort an array of objects ascending by the name key', () => {
    const array = [{ name: 'John' }, { name: 'Andrew' }];

    const sortedArray = sortArray(array, 'name', SORTING_ORDER.Ascending);

    expect(sortedArray).toEqual([{ name: 'Andrew' }, { name: 'John' }]);
  });

  it('should sort an array of objects descending by the name key', () => {
    const array = [{ name: 'Brian' }, { name: 'Casper' }];

    const sortedArray = sortArray(array, 'name', SORTING_ORDER.Descending);

    expect(sortedArray).toEqual([{ name: 'Casper' }, { name: 'Brian' }]);
  });
});
