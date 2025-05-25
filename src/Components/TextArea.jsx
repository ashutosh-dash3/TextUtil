import React, { useState } from 'react'

export const TextArea = (props) => {

    const [Text, setText] = useState('')

    const handelOnchange = (event) => {
        setText(event.target.value)
    }

    const toUpperCaseFunc = () => {
        setText(Text.toUpperCase())
        console.log(`To Uppercase is hitted...`)
        props.showAlert("TEXT CONVERTED TO UPPER CASE!", "Success")
    }

    const toLowerCaseFunc = () => {
        setText(Text.toLowerCase())
        console.log(`To Lowercase is hitted...`)
        props.showAlert("text converted to lower case!", "Success")
    }

    const CopyText = () => {
        navigator.clipboard.writeText(Text)
        props.showAlert("Text copied to clipboard!", "Success")
    }

    return (
        <>
            <div className={`text-${props.theme}`}>
                <h1>{props.heading}</h1>
                <textarea className="form-control " value={Text} onChange={handelOnchange} id="exampleFormControlTextarea1" rows="18" placeholder='Enter Your Text Here...'></textarea>
                <button className="btn btn-primary mx-1 my-2" onClick={toUpperCaseFunc}>To Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={toLowerCaseFunc}>To Lowercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={CopyText}>Copy Text</button>
                <div className="container">
                    <h1>Your Text Summery:-</h1>
                    <p>You have {Text.split(" ").length} number of words and {Text.length} number of characters.</p>
                    <p>You will take an average time of {0.008 * Text.split(" ").length} minutes to read the words.</p>
                    <h2>Preview</h2>
                    <p>{Text}</p>
                </div>
            </div>
        </>
    )
}