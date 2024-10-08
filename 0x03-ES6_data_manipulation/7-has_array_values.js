// A function to return a boolean if set of elements exist
export default function hasValuesFromArray(xSet, xArray) {
  return xArray.every((element) => xSet.has(element));
}
