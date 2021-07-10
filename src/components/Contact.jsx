import React, {useState} from "react";
import SectionHeader from './utils/SectionHeader';
import emailjs from 'emailjs-com';

const Input = ({inputName, type, placeholder, value, onChange, textArea = false}) => {
  if(!textArea)
    return (
    <input 
      type={type} 
      name={inputName}
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
      aria-label={placeholder}
      className="rounded pl-2 py-5 border h-8 w-full border-transparent shadow-inner focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"/>
    )
  
  return (
  <textarea 
    rows="6" 
    type={type}
    name={inputName}
    value={value}
    onChange={onChange}
    placeholder={placeholder} 
    aria-label={placeholder} 
    className="rounded pl-2 py-2 border w-full border-transparent shadow-inner focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"/>
  )
}

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  }

  const formMessage = !document ? '' : document.querySelector('.form-message');
  const handleSuccess = () => {
    setName('');
    setEmail('');
    setMessage('');

    formMessage.classList.remove('opacity-0')
    setTimeout(() => {
      formMessage.classList.add('opacity-0')
    }, 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio_site', 'portfolio_site', e.target, 'user_WDObBAlbPYJe8ZiZ6VQ9w')
      .then(() => {
        handleSuccess();
      }, (error) => {
        throw new Error(error.text);
      });
  }

  return (
    <div className="pb-28" id="contact">
      <div className="section">
        <SectionHeader title="Contact"/>
        <form onSubmit={handleSubmit} className="card">
          <div className="mb-8">
            <h2 className="text-bodyText sm:text-lg text-center">
              Want to work with me? <br className="sm:hidden"/> 
              <span className="border-b-2 border-green">Send me a message.</span>
            </h2>
          </div>
          <Input
            type="text" 
            inputName="name"
            value={name}
            onChange={handleChange}
            placeholder="Your name"
          />
          <div className="mb-8"/>
          <Input 
            type="email" 
            inputName="email" 
            value={email} 
            onChange={handleChange}
            placeholder="Your email"
          />
          <div className="mb-8"/>
          <Input 
            type="textarea"
            value={message}
            onChange={handleChange}
            inputName="message" 
            placeholder="Your message" 
            textArea="true"
          />
          <div className="form-message transition-all duration-300 ease-in-out bg-green w-full text-center text-bodyText opacity-0">Message sent!</div>
          <div className="mb-2"/>
          <div className="w-full flex justify-end">
            <button className="btn btn-blue">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  )
}