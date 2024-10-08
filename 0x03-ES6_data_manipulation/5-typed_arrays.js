// Returns a new array buffer
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const xint8Arr = new Int8Arr(length);
  xint8Arr.fill(value, position, position + 1);
  return new DataView(xint8Arr.buffer);
}
