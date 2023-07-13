import NoteContext from "./noteContext";
import { useState,useEffect } from "react";
import axios from 'axios';



const NoteState = (props)=>{
  
    const [loginverification,setloginverification]=useState(document.cookie)
  

const notes= [
      {
          "_id": "649f497ada7b099c946b58b2",
          "user": "649f4835da7b099c946b58a0",
          "title": "deccan",
          "description": "Mangas notes",
          "tag": "NEws",
          "date": "2023-06-30T21:30:34.289Z",
          "__v": 0
      },
      {
          "_id": "649f497bda7b099c946b58b4",
          "user": "649f4835da7b099c946b58a0",
          "title": "deccan",
          "description": "Mangas notes",
          "tag": "NEws",
          "date": "2023-06-30T21:30:35.178Z",
          "__v": 0
      }
  ]
  async function postnotes (object) {
    const config={
        headers:{"Content-Type":"application/json"},
        withCredentials:true
      }

    const response=await axios.post("http://localhost:8080/api/notes/addnote",object,config)
    console.log("response is ",response.data);
    
  }
 async function checkLogin(object){
    const config={
        headers:{"Content-Type":"application/json"},
        withCredentials:true
      }
     let response= await axios.post("http://localhost:8080/api/auth/login",object,config)
     console.log("from note state",response.data)
     setloginverification(document.cookie)

  
    
 }


    return (
        <NoteContext.Provider value={{notes,postnotes,checkLogin,loginverification}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;