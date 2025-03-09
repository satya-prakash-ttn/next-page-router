import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);


  const fetchData = async (cacheMode) => {
    console.log(`Fetching data with cache mode: ${cacheMode}`);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        cache: cacheMode, 
      });
      const data = await response.json();
      setData(data);
      console.log('Fetched Data:', data);
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  useEffect(() => {
    
    fetchData('force-cache');
   
    setTimeout(() => fetchData('no-store'), 5000);

  }, []);

  return (
    <div className='container'>
      <h1>Next.js Fetch with Cache Variations</h1>
      <p>Data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
