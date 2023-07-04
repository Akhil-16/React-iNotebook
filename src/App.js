
import './App.css';
import Navbar from "./Components/Navbar"
import Home  from "./Components/Home"
import About from "./Components/About"

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import NoteState from './Context/notes/NoteState';

function App() {
  return (
 <>
 <NoteState>
  <Router>
          <Navbar />

          <Routes>
          <Route exact path="/" element={<Home></Home>}/>
            <Route exact path="/About" element={<About></About>}/>
            {/* <Route exact path='/api/auth/login'></Route> */}
            
    


          </Routes>


        </Router>
        </NoteState>
 </>
  );
}

export default App;
