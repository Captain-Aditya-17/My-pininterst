import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Visible = () => {
  const { id } = useParams();
  const [albumdata, setalbumdata] = useState(null)

  useEffect(() => {
    fetch(`https://picsum.photos/id/${id}/info`).then(response => response.json()).then(data => {
      setalbumdata(data)
    })
  }, [id])

  return (
    <div>
      {
        albumdata && (
          <>
            <div className='w-full h-screen flex justify-center px-[5vw] bg-zinc-900 pt-[8vw]'>
              <div className='inline-block h-[80%] rounded-l-[50px] overflow-hidden'>
                <img className='w-full h-full object-cover' src={albumdata.download_url} alt="" />
              </div>
              <div className='bg-zinc-900 shadow-lg shadow-white w-1/2 rounded-r-[50px] h-[80%]'>
                <h1 className='m-5 text-3xl font-bold text-white'>{albumdata.author}</h1>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Visible