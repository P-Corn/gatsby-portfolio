import React from 'react';

export default function SectionHeader({title}) {
    return (
      <div className="text-center">
        <h2 className="section-title">{title}</h2>
        <hr className="w-16 border-0 bg-primary py-0.5 mx-auto mt-3 mb-9"></hr>
      </div>
    )
  }