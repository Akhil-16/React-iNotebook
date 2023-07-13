
import './App.css';
import Navbar from "./Components/Navbar"
import Home  from "./Components/Home"
import About from "./Components/About"



import useState from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';

function App() {

  return (
 <>
 <NoteState>
  <Router>
          <Navbar />
          <Alert message={"This is alert"}></Alert>

          <Routes>
          <Route exact path="/" element={<Home></Home>}/>
            <Route exact path="/About" element={<About ></About>}/>
            <Route exact path='/Login' element={<Login></Login>}></Route>
            
    


          </Routes>


        </Router>
        </NoteState>
 </>
  );
}

export default App;
