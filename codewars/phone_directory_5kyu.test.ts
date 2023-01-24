import { describe, expect, test } from '@jest/globals';
import { phone } from './phone_directory_5kyu';

describe('phone directory sorter', () => {
  const s1 =
    '/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n';
  const num1 = '1-541-754-3010';
  const a1 =
    'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.';
  test('returns the correct name, number and address', () => {
    expect(phone(s1, num1)).toBe(a1);
  });
});
