export default function appendToEachArrayValue(array, appendString) {
  const retArray = [];
  for (const idx of array) {
    retArray.push(appendString + idx);
  }

  return retArray;
}
