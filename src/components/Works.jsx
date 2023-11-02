import React from 'react'
import { Bounce } from "react-awesome-reveal";

const Works = (props) => {
  const works=[
    {
id:0,
name:"github",
img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
,
url:"https://github.com/AmrKhaled03"
    }
    ,
    {
id:1,
name:"linkedin",
img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg",
url:"https://www.linkedin.com/in/amr-khaled-marey-16b817228"
    },
    {
id:2,
name:"vercel",
img: "https://assets.vercel.com/image/upload/front/assets/design/components/triangle.gif",
url:"https://vercel.com/dashboard"
    }
  ]
  return (
   <div className="works my-5 p-5" id="works">
     <div className="container text-center d-flex justify-content-center align-items-center flex-column">
    <h1 style={{color:"goldenrod" , fontWeight:"bolder" }}>
  WORKS
    </h1>
  
  <p className={props.dark?"text-center text-light" :"text-center"}>
    #To see all my works and certifications just click 
  </p>
  <Bounce cascade>
 <div className="row mt-5">
    {works.map((work)=>(

      <div className="col-lg-4" key={work.id}>
        <a href={work.url}>
        <img src={work.img} alt={work.name} className='img-fluid w-50' style={{aspectRatio:"1/1"}}/>
        </a>

      </div>
    ))}
   
    
    </div>
</Bounce>
 
  </div>
   </div>
  )
}

export default Works