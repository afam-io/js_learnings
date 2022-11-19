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
