import React from "react";
import Link from 'next/link';
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }
  
  const ServerSideFetching = ({ data }) => {
    return (
      <div className='container'>
        <h1>SSR</h1>
        <ul>
          {data.slice(0, 5).map(post => (
            <li key={post.id}>
              <h2><Link href={`/posts/${post.id}`} >{post.title}</Link></h2>
              <p>{post.body}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ServerSideFetching;
  