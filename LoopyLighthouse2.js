function loopyLighthouse(range, multiples, words) {
  let start = range[0];
  let end = range[1];
  let firstMultiple = multiples[0];
  let secondMultiple = multiples[1];
  let firstWord = words[0];
  let secondWord = words[1];

  for (let i = start; i <= end; i++) {
    if (i % firstMultiple === 0 && i % secondMultiple === 0) {
      console.log(firstWord + secondWord);
    } else if (i % firstMultiple === 0) {
      console.log(firstWord);
    } else if (i % secondMultiple === 0) {
      console.log(secondWord);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);