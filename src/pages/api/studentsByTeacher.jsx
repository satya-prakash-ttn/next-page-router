import data from "../../../public/data.json";

export default function handler(req, res){
const { teacherId } = req.query;

const students = data.students.filter( (student)=> student.teacherId === parseInt(teacherId) )

res.status(200).json(students);
}