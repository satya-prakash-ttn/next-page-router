import React, { useEffect, useState } from 'react';
import Link from 'next/link';  


const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/teachers");
            if (!response.ok) throw new Error("Error in response");
            const data = await response.json();
            setTeachers(data);
        }
        fetchData();
    }, []);


    return (
        <div className='container'>
            <h1 className='mt-10 mb-10 text-4xl font-extrabold'>Teachers List</h1>
            <ul>
                {teachers.map(teacher => (
                    <li key={teacher.id}>
                       <Link href={`/studentsByTeacher?teacherId=${teacher.id}`}> {teacher.name}</Link> - {teacher.subject}
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default Teachers;
