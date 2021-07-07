import React, {useState, useEffect} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeader from './utils/SectionHeader';
import SkillSpan from "./utils/SkillSpan";
import ProjectBackground from '../media/svg/project-background-white.svg';

export default function Projects() {

  const projectData = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProject {
        edges {
          node {
            githubLink
            description
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
    <div className="relative parent card mb-10 project-card lg:flex lg:justify-end overflow-hidden">
      <div className="absolute top-0 left-0 invisible lg:visible">
        <GatsbyImage
          image={image}
          // imgClassName="absolute top-0 left-0 invisible lg:visible"
          // className="absolute top-0 left-0 invisible lg:visible"
          alt="project image"
        />
      </div>
      <ProjectBackground className="project-background invisible lg:visible absolute -top-px -right-px"/>
      {/* <div className={`project-background invisible lg:visible -top-px -right-px absolute`}></div> */}
      <div className="lg:w-7/12 z-10">
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
          <a href={previewLink}>
            <button className="btn bg-primary text-white mb-4 shadow-md hover:shadow-lg">LIVE DEMO</button>
          </a>
          {/* <div className="mx-4"></div> */}
          <a href={githubLink}>
            <button className="btn text-primary shadow-md hover:shadow-lg">VIEW SOURCE</button>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mb-28">
      <div className="section">
        <SectionHeader title="Projects"/>
        <div>
          {projects.map(project => (
            <ProjectCard 
              title={project.node.title} 
              desc={project.node.description} 
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