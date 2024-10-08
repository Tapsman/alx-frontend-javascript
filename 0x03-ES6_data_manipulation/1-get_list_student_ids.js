// A function that creates an array of Ids
export default function getListStudentIds(xlistStudents) {
  return Array.isArray(xlistStudents) ? xlistStudents.map(({ id }) => id) : [];
}
