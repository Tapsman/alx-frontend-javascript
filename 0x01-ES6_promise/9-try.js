export default function guadrail(mathFunction) {
  // This is a function name Guardrail and will accept argument math
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  }
  queue.push('Guardrail was processed');
  return queue;
}
