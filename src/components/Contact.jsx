import React from "react";
import SectionHeader from './utils/SectionHeader';
import SkillSpan from "./utils/SkillSpan";

export default function Contact() {
  const tempSkills = ['HTML5', 'CSS3', 'ReactJS', 'JavaScript', 'Material-UI'];

  const ProjectCard = ({title, desc, skills}) => (
    <div className="card mb-10">
      <div>
        <h2 className="text-3xl text-bodyText font-normal mb-8">{title}</h2>
      </div>
      <div className="mb-8">
        <p className="text-bodyText">{desc}</p>
      </div>
      <div className="mb-8">
        {skills.map(skill => (
          <SkillSpan skill={skill}/>
        ))}
      </div>
      <div>
        <button className="btn bg-primary text-white mb-4 shadow-md hover:shadow-lg">LIVE DEMO</button>
        <br/>
        <button className="btn text-primary shadow-md hover:shadow-lg">VIEW SOURCE</button>
      </div>
    </div>
  )

  return (
    <div className="bg-section section">
      <SectionHeader title="Projects"/>
      <div>
        <ProjectCard title="Vottron" desc="Here's a description about the project such as it's purpose, what I learned, and the tools I used to build it." skills={tempSkills}/>
        <ProjectCard title="Spotifind" desc="Here's a description about the project such as it's purpose, what I learned, and the tools I used to build it." skills={tempSkills}/>
        <ProjectCard title="Portfolio" desc="Here's a description about the project such as it's purpose, what I learned, and the tools I used to build it." skills={tempSkills}/>
      </div>
    </div>
  )
}