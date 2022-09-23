function merge(arr1, arr2) {
  let sorted = [];
  let xindex = 0;
  let yindex = 0;

  while (xindex < arr1.length && yindex < arr2.length) {
    if (arr2[yindex] < arr1[xindex]) {
      sorted.push(arr2[yindex]);
      yindex++;
    } else {
      sorted.push(arr1[xindex]);
      xindex++;
    }
  }

  if (xindex === arr1.length) {
    return sorted.concat(arr2.slice(yindex));
  }

  if (yindex === arr2.length) {
    return sorted.concat(arr1.slice(xindex));
  }

}

function mergeSort(arr) {
  //break up array into halves until array.length 1
  //basecase:
  if (arr.length <= 1) return arr;

  let upperhalf = Math.floor(arr.length / 2);

  return merge(
    mergeSort(arr.slice(0, upperhalf)),
    mergeSort(arr.slice(upperhalf)));
}

module.exports = { merge, mergeSort };