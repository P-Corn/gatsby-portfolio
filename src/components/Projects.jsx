import React, {useState} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeader from './utils/SectionHeader';
import SkillSpan from "./utils/SkillSpan";
import ProjectBackground from '../media/svg/project-background-white.inline.svg';

export default function Projects() {

  const projectData = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProject {
        edges {
          node {
            githubLink
            description {
              description
            }
            previewLink
            title
            technologies
            image {
              gatsbyImageData(layout: CONSTRAINED, width: 700)
              file {
                url
              }
            }
          }
        }
      }
    }`)
  const [projects] = useState(projectData.allContentfulProject.edges);

  const ProjectCard = ({title, desc, skills, previewLink, githubLink, image}) => (
    <div className="relative parent card mb-10 md:mb-20 project-card lg:flex lg:justify-end overflow-hidden">
      <div className="absolute top-0 left-0 invisible lg:visible">
        <GatsbyImage
          image={image}
          alt="project image"
        />
      </div>
      <ProjectBackground className="project-background invisible lg:visible absolute -top-px -right-px"/>
      <div className="lg:w-7/12 z-10">
        <div>
          <h2 className="text-3xl text-bodyText font-normal mb-8">{title}</h2>
        </div>
        <div className="mb-8">
          <p className="text-bodyText">{desc}</p>
        </div>
        <div className="mb-8">
          {skills.map(skill => (
            <SkillSpan key={skill} skill={skill}/>
          ))}
        </div>
        <div className="flex flex-wrap">
          <a className="flex-none" target="_blank" rel="noopener noreferrer" href={previewLink}>
            <button className="btn btn-blue">LIVE DEMO</button>
          </a>
          <div className="xs:mr-4"></div>
          <div className="my-6"></div>
          <a className="flex-none" target="_blank" rel="noopener noreferrer" href={githubLink}>
            <button className="btn btn-white">VIEW SOURCE</button>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mb-28" id="projects">
      <div className="section">
        <SectionHeader title="Projects"/>
        <div>
          {projects.map(project => (
            <ProjectCard 
              key={project.node.title}
              title={project.node.title} 
              desc={project.node.description.description} 
              skills={project.node.technologies.split(',')} 
              previewLink={project.node.previewLink} 
              githubLink={project.node.githubLink}
              image={getImage(project.node.image)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}