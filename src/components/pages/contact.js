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
            <h1 className="title">Contact</h1>
             <div className="page contact-page">

                <form onSubmit={handleSubmit}>
                    <label className="contact-item contact-item-1" for="name">Name:
                        <input type='text' name="name" value={name} onChange={handleName} required/>
                    </label>

                    <label className="contact-item contact-item-2" for="email"> Email:
                        <input type="text" name="email" value={email} onChange={handleEmail} required/>
                    </label>

                    <label className="contact-item contact-item-3" for="message">Message:
                        <textarea value={textArea} onChange={handleText}/>
                    </label>

                    <input className="contact-item contact-item-4" type="submit" value="Submit"/>

                </form>
            </div>
        </div>
       
    )
}