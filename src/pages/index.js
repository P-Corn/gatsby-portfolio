import React, { useEffect, useState } from "react"
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import useViewPort from "../hooks/useViewport";

export default function Home() {

  return (
    <div>
      <div className="homepage-bg">
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <div className="text-center py-6 md:text-lg">peytoncornelison@gmail.com</div>
      </div>
    </div>
  )
}