// returns a string of all set values
export default function cleanSet(xSet, xStartString) {
  if (!xSet || !xStartString || !(xSet instanceof Set) || typeof xStartString !== 'string') {
    return '';
  }
  return Array.from(xSet)
    .filter((element) => element && element.startsWith(xStartString))
    .map((element) => element.replace(xStartString, ''))
    .join('-');
}
