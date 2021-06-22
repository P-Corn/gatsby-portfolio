import React, {useEffect, useState} from "react";
import Typewriter from 'typewriter-effect/dist/core';
import BubbleHeader from '../media/svg/bubble-header.svg';
import BubbleHeaderMobile from '../media/svg/bubble-header-mobile.svg';

export default function Header() {

  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      })
    }
  }, [window.innerWidth])

  useEffect(() => {
    const typewriter = new Typewriter(document.querySelector('.hero-text'), {
      loop: false,
      delay: 100
    })

    typewriter
      .typeString('Hi, I\'m Peyton')
      .pauseFor(2500)
      .deleteAll()
      .typeString('I\'m a web developer')
      .start();
  }, [])

  const Navlink = ({text}) => (
    <li className="flex-1 text-center py-2">
      <button className="btn text-primary">{text}</button>
    </li>
  )

  const Navbar = () => (
    <div className="z-10 w-full absolute child">
        <ul className="w-full h-20 flex justify-around items-center max-w-screen-lg mx-auto">
            <Navlink text="ABOUT"/>
            <Navlink text="PROJECTS"/>
            <Navlink text="CONTACT"/>
        </ul>
    </div>
  )

  // const ShapeDivider = () => {
  //   return(
  //     <div>
  //       <div class="custom-shape-divider-bottom-1623437888">
  //         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  //             <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
  //         </svg>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="mb-28 relative parent">
      <Navbar/>
      <section className="section h-screen text-center flex justify-center content-center flex-col">
        <div aria-label="Hi, I'm Peyton, I'm a web developer" className="z-10 mb-3">
          <h1 aria-hidden="true" className="hero-text text-4xl sm:text-5xl text-bodyText font-semibold"></h1>
        </div>
        <div className="z-10 mb-14 mt-9">
          <button className="btn btn-blue">MY PROJECTS</button>
        </div>
      </section>
      <div className="absolute inset-0">
        {
          windowWidth > 640
          ?
          <BubbleHeader className="w-full"/>
          :
          <BubbleHeaderMobile className="w-full"/>
        }
      </div>
    </div>
  )
}