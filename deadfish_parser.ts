// codewars problem - https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript
/* 

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.
parse("iiisdoso") => [8, 64]
*/

/* 
Plan
1. function accepts a string need to loop through said string
2. Match value in string to idso and operate from there


*/

const parse = (data: string): number[] => {
  let arr = [];
  let currentNumber = 0;
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'i':
        currentNumber++;
        break;
      case 'd':
        currentNumber--;
    }
  }

  return arr;
};

parse('iiisdoso');
