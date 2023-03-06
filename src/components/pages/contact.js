import React, { useState, useRef } from "react";

// brings in emailjs browser package
import emailjs from '@emailjs/browser';

export default function Contact(){ 

    // useRef does not re-render the component when changed, unlike state 
    // can be used to store information in between renders 
    const refForm = useRef();

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

    // handles the state of subject
    const[subject, setSubject] = useState('')
    const handleSubject = (event) => {
        setSubject(event.target.value)
    }

    // handles the state of messages
    const[textArea, setTextArea] = useState('')
    const handleText = (event) =>{
        setTextArea(event.target.value)
    }


    
    const[validation, setValidation] = useState('')
    // updates the message class to change color 
    const[validationClass, setValidationClass] = useState('')

    // lets user know validity of message after submitting
    const handleSubmit = (e) =>{

        if (textArea === ''){
            setValidation('Please enter a message.')
            setValidationClass('invalidMessage')
        }else{
            // using the sendForm method from emailjs to send data collected from the form as an email
            emailjs.sendForm('default_service', 'template_qyqu7xe', refForm.current, 'chgICPeVH3BEo3nC3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            setValidation('Successfully submitted!')
            setValidationClass('validMessage')
        }

        e.preventDefault();
    }



    return(
        <div className="page">
            <h1 className="title">Contact Me</h1>
             <div className="contactForm">
                {/* uses ref to store a reference to a DOM node */}
                <form ref={refForm} onSubmit={handleSubmit}>
                    <label className="contact-item contact-item-1" for="name">Name:
                        <input type='text' name="name" value={name} onChange={handleName} required/>
                    </label>

                    <label className="contact-item contact-item-2" for="email"> Email:
                        <input type="text" name="email" value={email} onChange={handleEmail} required/>
                    </label>

                    <label className="contact-item contact-item-3" for="subject">Subject:
                        <input type='text' name='subject' value={subject} onChange={handleSubject}/>
                    </label>

                    <label className="contact-item contact-item-4" for="message">Message:
                        <textarea name='message' value={textArea} onChange={handleText}/>
                    </label>

                    <input className="contact-item contact-item-5" type="submit" value="Submit"/>

                    <p className={validationClass}>{validation}</p>
                </form>

            </div>
        </div>
       
    )
}