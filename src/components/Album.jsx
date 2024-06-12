import React, { useEffect, useState } from 'react'
import Card from './Card'

const Album = () => {
  const [album, setalbum] = useState([])
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=100').then(response => response.json()).then(data => setalbum(data));
  }, []);
  return (
    <div className='w-full columns-4 py-[8vw]'>
     {
      album.map((item,index)=>(
        <Card image={item.download_url} width={item.width}  height={item.height} name={item.author} id={item.id}/>
      ))
     }
    </div>
  )
}

export default Album
