/* tslint:disable */
import { parseVersion } from '../index';
import * as jsc from 'jsverify';

const isEqual = (a: number, b: number): boolean => a === b;

describe('parseVersion', () => {
  test('it parse 1.2.3.4', () => {
    const res = parseVersion('1.2.3.4');
    expect(res.major).toBe(1);
    expect(res.minor).toBe(2);
    expect(res.patch).toBe(3);
    expect(res.text).toBe('1.2.3');
    expect(res.parsed).toEqual([1, 2, 3]);
  });
  test('it parse an empty string', () => {
    const res = parseVersion('');
    expect(res.isEmpty).toBe(true);
    expect(res.major).toBe(0);
    expect(res.minor).toBe(0);
    expect(res.patch).toBe(0);
    expect(res.text).toBe('0.0.0');
    expect(res.parsed).toEqual([0, 0, 0]);
  });
  test('it parse a non valid string', () => {
    const res = parseVersion('hello there');
    expect(res.isEmpty).toBe(true);
    expect(res.major).toBe(0);
    expect(res.minor).toBe(0);
    expect(res.patch).toBe(0);
    expect(res.text).toBe('0.0.0');
    expect(res.parsed).toEqual([0, 0, 0]);
  });
  test('should parse any valid combination', () => {
    const isTested = jsc.checkForall(jsc.nat, jsc.nat, jsc.nat, (major, minor, patch) => {
      const parsed = parseVersion(`${major}.${minor}.${patch}`);
      const textIsEqual = parsed.text === `${major}.${minor}.${patch}`;
      const parsedIsEqual = [major, minor, patch].every((num: number, idx: number) => {
        return isEqual(num, parsed.parsed[idx]);
      });
      return textIsEqual && parsedIsEqual;
    });
    expect(isTested).toBe(true);
  });
});
