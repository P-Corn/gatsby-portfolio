import React from "react";
import SectionHeader from './utils/SectionHeader';
import SkillSpan from "./utils/SkillSpan";

export default function Projects() {
  const tempSkills = ['HTML', 'CSS', 'React', 'JavaScript', 'Material-UI'];

  const ProjectCard = ({skills}) => (
    <div className="card">
      <div>
        <h2 className="text-3xl text-bodyText font-normal">Vottron</h2>
      </div>
      <div>
        <p className="text-bodyText">Here's a description about the project such as it's purpose, what I learned, and the tools I used to build it.</p>
      </div>
      <div>
        {skills.map(skill => (
          <SkillSpan skill={skill}/>
        ))}
      </div>
      <div>
        <button className="btn bg-primary text-white">Live demo</button>
        <button className="btn text-primary">View source</button>
      </div>
    </div>
  )

  return (
    <div className="bg-section section">
      <SectionHeader title="Projects"/>
      <div>
        <ProjectCard skills={tempSkills}/>
      </div>
    </div>
  )
}