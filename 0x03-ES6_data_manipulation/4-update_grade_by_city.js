// This is a function that will return an array of
// students in a specific location with their new grades
export default function updateStudentGradeByCity(listStudents, pointLocation, newGrades) {
  return listStudents
    .filter(({ location }) => location === pointLocation)
    .map(obj) => {
      const xgetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = xgetNewGrade.length > 0 ? xgetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
