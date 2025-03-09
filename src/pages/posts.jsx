import React from "react";

export default function Posts({ posts }) {

//console.log(posts);
  const handleRevalidation = async () => {
    try {
      const res = await fetch('/api/revalidate', {
        method: 'POST',
      });

      const data = await res.json();
  
    } catch (error) {
      console.error('Error during revalidation:', error);
    }
  };

  return (
    <div className="container">
      <h1>Posts data</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>

      <button onClick={handleRevalidation}>Revalidate Posts Cache</button>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/newdata.json');
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 10, 
  };
}
