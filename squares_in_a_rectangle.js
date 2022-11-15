const perimeter = (n) => {
  let fibSeqArr = [1, 1];
  if (n === 0) {
    return 4;
  }

  let count = 1;
  for (let i = n - 2; i >= 0; i--) {
    count++;

    fibSeqArr.push(fibSeqArr[count - 2] + fibSeqArr[count - 1]);
  }
  console.log({ fibSeqArr });
  return fibSeqArr.reduce((a, b) => a + b) * 4;
};

console.log({ perim0: perimeter(0) });
console.log({ perim5: perimeter(5) });
console.log({ perim7: perimeter(7) });
console.log({ perim20: perimeter(20) });
