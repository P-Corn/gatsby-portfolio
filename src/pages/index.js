import React from "react"
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import {Element} from "react-scroll";

export default function Home() {
  return (
    <div>
      <div className="bg-section">
        <div>
          <Header/>
          <Element name="about">
            <About/>
          </Element>
          <Element name="projects">
            <Projects/>
          </Element>
          <Element name="contact">
            <Contact/>
          </Element>
        </div>
      </div>
    </div>
  )
}