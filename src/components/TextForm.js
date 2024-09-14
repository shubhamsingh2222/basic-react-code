import React, {useState} from 'react'

export default function TextForm(props) {

    function TextStats(text) {
        // Trim the text to handle cases with leading or trailing spaces
        const trimmedText = text.trim();
        
        // Split the trimmed text by spaces to get words and filter out empty strings
        const wordsArray = trimmedText ? trimmedText.split(/\s+/).filter(Boolean) : [];
        const wordCount = wordsArray.length;
        const charCount = trimmedText.length;

        const readingTime = (wordCount * 0.008).toFixed(2);

        return {
            wordCount,
            charCount,
            readingTime
        }
    }
    const [text, setText] = useState('');
    const handlUpClick = () =>
    {
        // console.log("Uppercase was clicked" + text)
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "sccuess")
    }
    const handlLowClick = () =>
    {
        // console.log("Uppercase was clicked" + text)
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "sccuess")
    }
    const handclearClick = () =>
    {
        setText('')
    }
    const handlOnChange = (event) =>
    {
        // console.log("On Change")
        setText(event.target.value)
        
    }
    // setText('New Text') // Correct way to update state
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className ="mb-3">
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handlOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handlUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handclearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{TextStats(text).wordCount} words and {TextStats(text).charCount} characters</p>
            <p>{TextStats(text).readingTime} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing to priview here!"}</p>
        </div>
        </>
        
    )
}
