import React from 'react'
import  padge from "../imgs/247098189_584080323016743_1624283138537223290_n.jpg" 
import "../all.css"
import {  Slide } from "react-awesome-reveal";


const About = (props) => {
  return (
    <Slide cascade direction='right'>

<div id="about"  className='my-5 p-5 '>
    
    <div className="container">
        <div className="row">


               <div className="col-lg-6 text-center d-flex justify-content-center align-items-center">
            <p className={props.dark ? "text-light" : "text-dark"} style={{fontSize:"30px"}}>I joined the College of Computer Science and Information Technology in 2021 and majored in the field of software engineering with a grade of excellence, and I will graduate in 2025.</p>

            </div>

       
          <div className="col-lg-6">
            <img src={padge} alt={padge} className='img-fluid  my-padge' />

            </div>
         
            
        </div>
    </div>
    </div>

    </Slide>
    
  )
}

export default About