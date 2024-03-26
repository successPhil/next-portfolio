"use client"

import React from "react"
import {useForm, ValidationError } from '@formspree/react'
const ContactForm = () => {
    const [state, handleSubmit ] = useForm("xeqyrqkv");
    if (state.succeeded) {
        return <p className="text-gray-200 mx-auto">Thanks for reaching out, I&apos;ll get back to you soon!</p>
    }
    return (
    <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
        <div className="mb-3">
            <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
            />
        </div>
        
        <div className="mb-3">
            <input
            type="email"
            placeholder="email"
            name="email"
            className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
            />
            <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            />
        </div>
        
        <div className="mb-3">
            <textarea
            id="message"
            placeholder="Your message"
            name="message"
            className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
            />
             <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            />
        </div>

        <button type="submit" disabled={state.submitting} className="px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
            Send a message
        </button>
    </form>)

}

export default ContactForm