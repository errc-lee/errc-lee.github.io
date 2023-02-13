import React from "react";
// Local Data
import Skill from "./Skill";

const Skills = ({ skills }) => {
  return (
   <div className="skills">
      <div className="skillsGrid">
        {skills.map(({ id, src, alt, title }) => {
          return (<Skill key={`skill-${id}`} source={src} alt={alt} title={title}/>)
      })}
    </div>            
  </div>
 )
}

export default Skills;
