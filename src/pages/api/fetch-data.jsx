export default async function handler(req, res) {
    const cacheMode = req.query.cacheMode || 'force-cache'; 
    
    console.log(`API Request with Cache Mode: ${cacheMode}`);
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        cache: cacheMode, 
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch data' });
      }
  
      const data = await response.json();
      console.log('Fetched Data:', data);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error in fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  