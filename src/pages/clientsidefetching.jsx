import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const ClientSideFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h1>Client Side Fetching</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.slice(0, 5).map(post => (
            <li key={post.id}>
              <h2><Link href={`/posts/${post.id}`} >{post.title}</Link></h2>
              <p>{post.body}</p>
              <hr />
            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientSideFetching;
