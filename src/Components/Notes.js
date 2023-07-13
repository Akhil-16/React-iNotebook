import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import NoteItem from './NoteItem'

function Notes() {
    const context=useContext(noteContext)
    const {notes}=context
  return (
    <div className="row my-3">
      <h1>Your Notes</h1>
      
{notes.map((note)=>{
  return <NoteItem  key={note._id} note={note} ></NoteItem>

})}
    </div>
  )
}

export default Notes