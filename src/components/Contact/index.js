import React, { useState } from 'react';
import { validateEmail, validateMessage } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/contact.css';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Email provided is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (e.target.name === 'message') {
            const isValid = validateMessage(e.target.value);
            if (!isValid) {
                setErrorMessage('Message provided is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact my-5">
            <h1 id="contact">Contact</h1>
            <hr />
            <div className="">
                <form className="form contact col-lg-6" id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input className="form-control" type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input className="form-control" type="email" defaultValue={email} name="email" onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="btn btn-dark" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;