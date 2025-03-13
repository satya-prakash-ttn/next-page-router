
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
      
        await res.unstable_revalidate('/newrevalidate'); 
  
        return res.status(200).json({ message: 'Page revalidated successfully' });
      } catch (err) {
        return res.status(500).json({ message: 'Error revalidating', error: err.message });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  