import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'

const Home = () => {

  const a=useContext(noteContext)


  return (
    <>
    {a.loading && <div>...Loading .....please wait</div>}
     {!a.loading && <div>About {a.value}</div>}
    </>
  )
}

export default Home