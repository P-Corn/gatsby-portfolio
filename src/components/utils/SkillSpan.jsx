import React from 'react';

export default function SkillSpan({skill}) {
  return (
    <span className="py-1.5 px-2 mr-3 mb-3 border-2 border-green rounded text-sm inline-block text-bodyText">{skill}</span>
  )
}