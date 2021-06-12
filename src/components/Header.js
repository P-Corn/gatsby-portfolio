import React from "react"

export default function Header() {

  const Navlink = ({text}) => {
    return(
      <li className="flex-1 text-center py-2">
        <button className="btn text-primary">{text}</button>
      </li>
    )
  }

  const Navbar = () => {
    return (
      <div className="w-full absolute child">
          <ul className="w-full h-20 flex justify-around items-center max-w-screen-lg mx-auto">
              <Navlink text="ABOUT"/>
              <Navlink text="PROJECTS"/>
              <Navlink text="CONTACT"/>
          </ul>
      </div>
    )
  }

  const ShapeDivider = () => {
    return(
      <div>
        <div class="custom-shape-divider-bottom-1623437888">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-section relative parent">
      <Navbar/>
      <section className="section h-screen text-center flex justify-center content-center flex-col">
        <div className="mb-3">
          <h1 className="text-4xl sm:text-5xl text-primary font-semibold">Hi, I'm Peyton</h1>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl text-primary font-light">I'm a web developer</h2>
        </div>
        <div className="mb-14 mt-9">
          <button className="btn btn-blue">MY PROJECTS</button>
        </div>
      </section>
      <ShapeDivider/>
    </div>
  )
}