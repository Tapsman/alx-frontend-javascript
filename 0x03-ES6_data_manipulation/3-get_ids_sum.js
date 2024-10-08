// The function will return the sum of all the student ids
export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((xa, { id }) => xa + id, 0);
}
