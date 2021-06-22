import React from "react";
import SectionHeader from './utils/SectionHeader';
import { StaticImage } from 'gatsby-plugin-image';
import SkillSpan from "./utils/SkillSpan";
import Twitter from '../media/svg/twitter.svg';
import Linkedin from '../media/svg/linkedIn.svg';
import Github from '../media/svg/github.svg';

export default function About() {
  const skills = ['HTML', 'CSS', ' JavaScript', 'React', 'Node', 'SCSS', 'Git'];

  const MyPicture = () => (
    <StaticImage 
      src="../media/meCut.png" 
      alt="picture of myself"
      placeholder="blurred"
      width={120}
      height={145}
      objectFit="fill"
    />
  )

  const Subtitle = ({subtitle}) => (
    <h5 className="text-bodyText font-semibold text-xl">{subtitle}</h5>
  )

  const AboutContent = () => (
    <div className="card w-full flex items-center flex-col md:flex-row">
      <div className="md:flex items-center">
        <div className="flex-none pt-3 mx-auto mb-8 md:mb-0 flex justify-center items-center bg-section shadow-inner w-48 h-48 rounded-full">
          <MyPicture />
        </div>
        <div className="md:px-8"></div>
        <div>
          <div className="mb-8 md:mb-10">
            <Subtitle subtitle="Me:"/>
            <p className="text-bodyText md:mt-1.5">Here's a bunch of text that will sum up just about everything you'll need to know about me. Here's a bunch of text that will sum up just about everything you'll need to know about me.</p>
          </div>
          <div className="mb-5 md:mb-7">
            <Subtitle subtitle="Skills:"/>
            <div className="mt-2.5 md:mt-4">
              {skills.map(skill => (
                <SkillSpan skill={skill}/>
              ))}
            </div>
          </div>
          <div>
            <Subtitle subtitle="Social:"/>
            <div className="flex justify-between mt-2.5 md:mt-4">
              <a href="https://www.twitter.com"><Twitter className="fill-current text-primary h-10 w-10"/></a>
              <a href="https://www.linkedin.com"><Linkedin className="fill-current text-primary h-10 w-10"/></a>
              <a href="https://www.github.com"><Github className="fill-current text-primary h-10 w-10"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="mb-28">
      <section className="section">
        <SectionHeader title="About" />
        <AboutContent />
      </section>
    </div>
  )
}