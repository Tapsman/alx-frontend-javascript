export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /*And now to disable unused vars*/
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
