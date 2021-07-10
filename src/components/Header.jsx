import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function Header() {

  useEffect(() => {
    const typewriter = new Typewriter(document.querySelector('.hero-text'), {
      loop: true,
      delay: 100
    })

    typewriter
      .typeString('Hi, I\'m Peyton.')
      .pauseFor(1500)
      .deleteAll()
      .typeString('I\'m a web developer.')
      .pauseFor(9000)
      .start();
  }, [])

  const Navlink = ({text}) => (
    <li className="flex-1 text-center py-2">
      <AnchorLink 
        className="text-primary btn" 
        to={`/#${text}`} 
        title={text.toUpperCase()}
      />
    </li>
  )

  const Navbar = () => (
    <div className="z-10 w-full absolute child">
        <ul className="w-full h-20 flex justify-around items-center max-w-screen-lg mx-auto">
            <Navlink text="about"/>
            <Navlink text="projects"/>
            <Navlink text="contact"/>
        </ul>
    </div>
  )

  return (
    <div className="mb-28 relative parent">
      <Navbar/>
      <section className="section h-screen text-center flex justify-center content-center flex-col">
        <div aria-label="Hi, I'm Peyton, I'm a web developer" className="z-10 mb-3">
          <h1 aria-hidden="true" className="hero-text leading-10"></h1>
        </div>
        <div className="z-10 mb-14 mt-9">
          <AnchorLink
            className="btn btn-blue"
            to="/#projects"
            title="MY PROJECTS"
          />
        </div>
      </section>
    </div>
  )
}