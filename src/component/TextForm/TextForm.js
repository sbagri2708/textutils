import React, {useState} from "react";

export default function TextForm(props) {

    
    const handleOnChange = (e) => {
        // console.log("On change");
        setText(e.target.value);
    }

    const handleUpClick = () => {
        // console.log("uppercase clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase", "success");
    }

    const handleLowerClick = () => {
        // console.log("uppercase clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase", "success");
    }

    const handleReverseClick = () => {
        // console.log("uppercase clicked "+text);
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
        props.showAlert("Text Reversed", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared", "success");
    };

    const handleCopyClick = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        newText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }

    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(' '));
        props.showAlert("Extra space removed", "success");
    };


    const [text, setText] = useState("");
  return (
    <>
        <div className="container" style={{color: props.modeColor === 'light' ? '#042743' : 'white' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.modeColor, color: props.mode === 'light' ? '#042743' : 'white' }} value={text}></textarea>
            </div>
            
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? '#042743' : 'white' }}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').pop().length>0 ? text.split(' ').length : text.split(' ').length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text : "Enter Something in the textbox"}</p>
        </div>
    </>
  )     
}
