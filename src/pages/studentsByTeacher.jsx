import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';

const StudentsByTeacher = () => {
    const[students, setStudents] = useState([]);
    const router = useRouter();
    const { teacherId } = router.query;
    useEffect(() => {
        if (teacherId) {
          const fetchStudentsByTeacher = async () => {
            const res = await fetch(`/api/studentsByTeacher?teacherId=${teacherId}`);
            const data = await res.json();
            setStudents(data);
          };
    
          fetchStudentsByTeacher();
        }
      }, [teacherId]);

    return (
        <div className='container'>
      <h1>Students of Teacher {teacherId}</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
    );
}

export default StudentsByTeacher;
