import React from 'react'

function NoteItem(props) {
    const {note}=props
  return (
    <div className="col-md-3">
    <div className="card" >

  <div className="card-body">
    <h5 className="card-title">{note.title} </h5>
    <p className="card-text">{note.description}</p>
    <div className="d-flex ">
    <i className="fa-sharp fa-solid fa-trash mx-3"></i>
    <i className="fa-solid fa-file-pen"></i>
    </div>
   
  </div>
</div>
</div>
  )
}

export default NoteItem