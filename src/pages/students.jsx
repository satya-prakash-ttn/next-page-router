import React from 'react';

export async function getStaticProps(){
    const response = await fetch("http://localhost:3000/api/students");
    const result = await response.json();
    return {
        props:{
            students:result,
        },
    }
    
}


const Teachers = ( {students} ) => {


    return (
        <div className='container'>
            <h1 className='mt-10 mb-10 text-4xl font-extrabold'>Students List</h1>
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


export default Teachers;
