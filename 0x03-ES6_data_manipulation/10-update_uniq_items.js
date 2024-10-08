// Returns updated map items
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [t, v] of map.entries()) {
    if (v === 1) map.set(t, 100);
  }
  return map;
}
