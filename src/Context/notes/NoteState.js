import NoteContext from "./noteContext";
import { useState,useEffect } from "react";
import axios from 'axios';


const NoteState = (props)=>{
    const [value,setvalue]=useState()
const [loading,setloading]=useState(true)
  const fetchData=async ()=>{
    const response=await axios.get("http://localhost:8080/api/notes/fetchallnotes")
    setvalue(response.data)
    setloading(false)


  }

useEffect(() => {
  fetchData()

}, [])


    return (
        <NoteContext.Provider value={{loading,value}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;