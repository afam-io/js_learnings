import { describe, expect, test } from '@jest/globals';
import meeting from './meeting';

describe('meeting function', () => {
  /* spell-checker: disable */
  const s1 =
    'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';
  const a1 =
    '(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)';
  test('friends list one returns correctly sorted string', () => {
    expect(meeting(s1)).toBe(a1);
  });
});
