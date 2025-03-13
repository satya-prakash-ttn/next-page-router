import Image from 'next/image'
import { useEffect, useState } from 'react'

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    
    const fetchImage = async () => {
      const response = await fetch('https://picsum.photos/800/600')
      setImageUrl(response.url)
    }
    fetchImage()
  }, [])

  console.log(imageUrl);
  if (!imageUrl) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Random Image</h1>
      <Image
        src={imageUrl}
        alt="Random Image"
        width={800}
        height={600}
        layout="responsive"
        
      />
    </div>
  )
}

export default RandomImage
