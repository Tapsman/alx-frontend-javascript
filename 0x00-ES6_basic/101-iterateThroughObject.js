export default function iterateThroughObject(reportWithIterator) {
  const retString = [];
  for (const report of reportWithIterator) {
    retString.push(report);
  }
  return retString.join(' | ');
}
