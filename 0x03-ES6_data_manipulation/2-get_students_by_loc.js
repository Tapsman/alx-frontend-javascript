// This function gets studenst from a specific location or city
export default function getStudentsByLocation(listStudents, xpointLocation) {
  return listStudents.filter(({ location }) => location === xpointLocation);
}
