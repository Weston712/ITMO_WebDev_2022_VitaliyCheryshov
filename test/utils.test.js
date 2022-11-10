import { describe, expect, test } from 'vitest';
import { isStringNotNumberAndNotEmpty } from '../src/utils/stringUtils';

describe('Utils testing', () => {
  test('stringsUtils -> isStringNotNumberAndNotEmpty', () => {
    expect(isStringNotNumberAndNotEmpty(123)).toBe(false);
    expect(isStringNotNumberAndNotEmpty('')).toBe(false);
    expect(isStringNotNumberAndNotEmpty('Hello')).toBe(true);
    expect(() => isStringNotNumberAndNotEmpty(null)).toThrowError();
    expect(() => isStringNotNumberAndNotEmpty(undefined)).toThrowError();
  });
});
