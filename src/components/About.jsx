import React from "react";
import SectionHeader from './utils/SectionHeader';
import SkillSpan from "./utils/SkillSpan";
import Twitter from '../media/svg/twitter.inline.svg';
import Linkedin from '../media/svg/linkedIn.inline.svg';
import Github from '../media/svg/github.inline.svg';
import AboutBg from '../media/svg/aboutBgRight.inline.svg';

export default function About() {
  const skills = ['HTML5', 'CSS3', ' JavaScript', 'React', 'Redux', 'Node', 'SCSS', 'SQL', 'MongoDB', 'Java'];

  const Subtitle = ({subtitle}) => (
    <h5 className="text-bodyText font-semibold text-xl">{subtitle}</h5>
  )

  const AboutContent = () => (
    <div className="flex card relative parent overflow-hidden">
      <div className="z-20 min-w-0 min-h-0">
        <div className="sm:w-3/4 md:w-1/2 lg:w-1/2">
          <div className="mb-8 md:mb-10">
            <Subtitle subtitle="Me:"/>
            <p className="text-bodyText md:mt-1.5">
              I'm a full-stack developer with more experience in front-end development. My language of choice is JavaScript but I have experience using many other technologies.
              I enjoy exercising, programming, and learning new things.
            </p>
          </div>
          <div className="mb-5 md:mb-7">
            <Subtitle subtitle="Skills:"/>
            <div className="mt-2.5 md:mt-4">
              {skills.map(skill => (
                <SkillSpan key={skill} skill={skill}/>
              ))}
            </div>
          </div>
          <div>
            <Subtitle subtitle="Social:"/>
            <div className="flex justify-between sm:justify-start mt-2.5 md:mt-4">
              <a href="https://www.twitter.com" className="sm:mr-20">
                <Twitter className="social-link"/>
              </a>
              <a href="https://www.linkedin.com/in/peyton-cornelison" className="sm:mr-20">
                <Linkedin className="social-link"/>
              </a>
              <a href="https://github.com/P-Corn">
                <Github className="social-link"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="invisible sm:visible absolute child top-0 -right-80 md:-right-40 lg:-right-20 z-10">
        <AboutBg />
      </div>
    </div>
  )

  return (
    <div className="mb-28" id="about">
      <section className="section">
        <SectionHeader title="About" />
        <AboutContent />
      </section>
    </div>
  )
}