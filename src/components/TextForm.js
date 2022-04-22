import React, { useState } from 'react';

export default function TextForm(props) {
    const handUpClick= ()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handLoClick= ()=>{
        console.log("LowerCase was clicked " + text);
        let newText = text.toLowerCase();
        
        setText(newText);
    }
    const handClearClick= ()=>{
        // console.log("LowerCase was clicked " + text);
        let newText = "";
        
        setText(newText);
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

    }
    const handleOnChange= (event)=>{
        console.log("On change");
        setText(event.target.value );
    }
    const [text,setText] = useState('');
    // text = "new text";//Wrong way to change the state
    // setText("new text");//Correct way to change the state
  return(
   <  >
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 container">
                <textarea placeholder='Enter Your Text' className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'gray':'white' ,color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handUpClick}>Conver to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handLoClick}>Conver to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handClearClick}>Text  Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>handle Extra space</button>
            </div>
           <div  style={{color: props.mode==='dark'?'white':'black'}}>
           <h1> Your Text summary </h1>
            <p>{(text.split(" ").length)} word and {text.length} character in text </p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
           </div>
           
        </>
  )
}
