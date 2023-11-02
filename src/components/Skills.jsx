import React from 'react'
import "../all.css"
import { Bounce } from "react-awesome-reveal";

const Skills = (props) => {

  const skills=[

    {
      id:0,
      name:"html",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      id:1,
      name:"css",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
    },
    {
      id:2,
      name:"js",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
    },
    {
      id:3,
      name:"react",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    },
    {
      id:4,
      name:"vue",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
    },
    {
      id:5,
      name:"bootstarp",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
    },
    {
      id:6,
      name:"php",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
      id:7,
      name:"laravel",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"
    },
    {
      id:8,
      name:"node",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
    },
    {
      id:9,
      name:"cpp",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
      id:10,
      name:"python",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
    },
    {
      id:11,
      name:"arduino",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"
    },
  {
    id:12,
    name:"dart",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg"
  },
  {
    id:13,
    name:"flutter",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  },
  {
    id:14,
    name:"react-native",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  }

  ]
  return (
<div className="skills my-5 p-3" id="skills">
  <div className="container text-center">
    <h1 style={{color:"goldenrod" , fontWeight:"bolder" }}>
      SkILLS
    </h1>
  </div>
  <div className="container d-flex justify-content-center align-items-center">
  <Bounce cascade>
<div className="row mt-5  ">
      {skills.map((skill)=>(
          <div className="col-lg-3 col-md-4" key={skill.id}>
<img src={skill.img} alt={skill.name} className='img-fluid  skill-img m-3 p-2  '  />


      </div>
      ))}
    
    </div>
    </Bounce>

    
  </div>
</div>
  )
}

export default Skills