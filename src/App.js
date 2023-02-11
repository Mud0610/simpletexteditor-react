import "./App.css";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter
  } from "react-router-dom";

function App() {
    const [mode, setmode] = useState("light");
    
    const tmoded=()=>{
        if (mode==="dark") {
            setmode("light");
            document.body.style.backgroundColor ="white"
        } else {
            setmode('dark');
            document.body.style.backgroundColor ="#6c757d"

        }
    }
    

    return (
        <>
        <BrowserRouter>
        
        <Navbar title="Logo" about="About Us" mode={mode} tmode={tmoded} />
        <div className="container my-3">
            <Routes>
                <Route  path="/" element={<Textform/>}>
                   
                </Route>
                <Route exact path="/About" element={<About/>}>
                   
                </Route>
            </Routes>    
            
        </div>
        
        </BrowserRouter>
        </>
    );
}

export default App;


