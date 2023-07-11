function merge(a, b) {
  let out = [];

  let aPointer = 0;
  let bPointer = 0;
  // while the pointers have not reached the end =>
  while (aPointer < a.length && bPointer < b.length) {
    if (a[aPointer] <= b[bPointer]) {
      out.push(a[aPointer]);
      aPointer += 1;
    } else {
      out.push(b[bPointer]);
      bPointer += 1;
    }
  }

  //otherwise add all remaining values to out
  if (aPointer < a.length) {
    for (let i = aPointer; i < a.length; i++) {
      out.push(a[i]);
    }
  } else if (bPointer < b.length) {
    for (let j = bPointer; j < b.length; j++) {
      out.push(b[j]);
    }
  }

  return out;
}

function mergeSort() {
  // pop values off the end and compare -> add to new array one by one
}

module.exports = { merge, mergeSort };
