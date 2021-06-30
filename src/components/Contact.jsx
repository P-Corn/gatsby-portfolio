import React from "react";
import SectionHeader from './utils/SectionHeader';

export default function Contact() {

  const Input = ({name, type, placeholder, textArea = false}) => {
    if(!textArea)
      return <input type={type} name={name} placeholder={placeholder} aria-label={placeholder} className="rounded pl-2 py-5 border h-8 w-full border-transparent shadow-inner focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"/>
    
    return <textarea rows="5" type={type} name={name} placeholder={placeholder} aria-label={placeholder} className="rounded pl-2 py-2 border w-full border-transparent shadow-inner focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"/>
  }

  return (
    <div className="pb-28">
      <div className="section">
        <SectionHeader title="Contact"/>
        <form className="card p-10">
          <div className="mb-8">
            <h2 className="text-bodyText sm:text-lg text-center">Want to work with me? <br className="sm:hidden"/> <span className="border-b-2 border-green">Send me a message.</span></h2>
          </div>
          <Input type="text" name="name" placeholder="Your name"/>
          <div className="mb-8"/>
          <Input type="email" name="email" placeholder="Your email"/>
          <div className="mb-8"/>
          <Input type="textarea" name="message" placeholder="Your message" textArea="true"/>
          <div className="mb-8"/>
          <div className="w-full flex justify-end">
            <button className="btn bg-primary text-white shadow-md hover:shadow-lg">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  )
}