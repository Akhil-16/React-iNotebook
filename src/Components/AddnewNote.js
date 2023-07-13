import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/noteContext'


function AddnewNote() {

    const context=useContext(noteContext)
   
    const {postnotes}=context
    const handleclick=(e)=>{
        e.preventDefault()
      
        const obj={
            title:title,
            description:description,
            tag:tag
        }
        console.log("object is ",obj)
        postnotes(obj)
        
    }

  
    const [title,settitle]=useState("")
    const [description,setdescription]=useState("")
    const [tag,settag]=useState("")
    return (
        <div>      <h1>
            Add a Note
        </h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="Title" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
                   
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" className="form-control" id="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="Tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="Tag" value={tag} onChange={(e)=>{settag(e.target.value)}}/>
                </div>
            
             
                <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
            </form></div>
    )
}

export default AddnewNote