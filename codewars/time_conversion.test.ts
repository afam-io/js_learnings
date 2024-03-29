import { describe, expect, test } from '@jest/globals';
import humanReadable from './time_conversion';

describe.only('human readable time conversion', () => {
  test('humanReadable(0)', () => {
    expect(humanReadable(0)).toBe('00:00:00');
  });
  test('humanReadable(5)', () => {
    expect(humanReadable(5)).toBe('00:00:05');
  });
  test('humanReadable(60)', () => {
    expect(humanReadable(60)).toBe('00:01:00');
  });
  test('humanReadable(86399)', () => {
    expect(humanReadable(86399)).toBe('23:59:59');
  });
  test('humanReadable(359999)', () => {
    expect(humanReadable(359999)).toBe('99:59:59');
  });
});
