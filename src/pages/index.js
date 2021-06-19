import React from "react"
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <div className="bg-section">
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}