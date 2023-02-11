import React,{useState} from 'react';


function Textform(props) {

    const honchange = (event)=>{
        setText(event.target.value)
    }

    const upcase = ()=>{
        let newt= text.toUpperCase();
        setText(newt)
    }

    const lowcase = ()=>{
        let newt= text.toLowerCase();
        setText(newt)
    }
    const reversetext = ()=>{
        let newt= text.split('').reverse().join('');
        setText(newt)
    }

    const getcopy =()=>{
       var text= document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value)
    }
    const remspace=()=> {
        let newt = text.split(/[ ]+/);
        setText(newt.join(" "))
    }

    const clrtxt=()=> {
        let newt = '';
        setText(newt)
    }
    const [text,setText] = useState('')
    return (
        <>
        <div data-bs-theme={`${props.mode=== 'dark'? 'light':'dark'}`} >
        <div className='container'>
        <div className="mb-3">
            <h1 className='text-dark'>Enter your text here</h1>
            <textarea className="form-control" value={text} onChange={honchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-2" onClick={upcase}>Convert to UpCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={lowcase}>Convert to LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={reversetext}>Reverse String</button>
        <button className="btn btn-primary my-3 mx-2" onClick={getcopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={remspace}>Remove Extra Space</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clrtxt}>Clear Text</button>

        </div>
        <div className='conatiner'>
            <h1 className='text-dark'>Your Summmary </h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h1 className='text-dark'>Preview</h1>
            <p>{text}</p>
        </div>
        </div>
        </>
    )
}

export default Textform;