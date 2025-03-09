export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        
        await res.revalidate('/posts'); 
        
        console.log('Revalidation triggered for posts ');
  
        return res.status(200).json({ message: 'Cache purged and revalidated.' });
      } catch (error) {
        console.error('Revalidation failed:', error);
        return res.status(500).json({ message: 'Failed to revalidate.' });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  