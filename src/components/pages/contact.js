import React, { useState } from "react";

export default function Contact(){ 

    // handles the state of names
    const[name, setName] = useState('');
    const handleName = (event) => {
        setName(event.target.value)
    }

    // handles the state of email
    const [email, setEmail] = useState('');
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    // handles the state of messages
    const[textArea, setTextArea] = useState('')
    const handleText = (event) =>{
        setTextArea(event.target.value)
    }

    const handleSubmit = (event) =>{
        if (textArea === ''){
            alert('Please enter a message')
        }else{
            alert('successfully submitted')
        }


        event.preventDefault();
    }

    return(
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <label for="name">Name:
                    <input type='text' name="name" value={name} onChange={handleName} required/>
                </label>

                <label for="email"> Email:
                    <input type="text" name="email" value={email} onChange={handleEmail} required/>
                </label>

                <label for="message">Message:
                    <textarea value={textArea} onChange={handleText}/>
                </label>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}