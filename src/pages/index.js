import React from "react"
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Peyton Cornelison</title>
      </Helmet>
      <div className="bg-section">
        <div>
          <Header/>
          <About/>
          <Projects/>
          <Contact/>
          <div className="text-center py-6 md:text-lg">peytoncornelison@gmail.com</div>
        </div>
      </div>
    </div>
  )
}