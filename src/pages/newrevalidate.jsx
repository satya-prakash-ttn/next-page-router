import React from 'react';


const Newrevalidate = ({ todos }) => {
    
    return (
        <div className='container'>
      <h1>todos</h1>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
           {todo.title}
          </div>
        ))}
      </div>
    </div>
    );
}

export default Newrevalidate;


export async function getStaticProps() {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5');
    const todos = await res.json();
  
    return {
      props: { todos },
      revalidate: 10, 
    };
  }