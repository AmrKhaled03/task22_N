import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import cvImage from '../imgs/Screenshot 2023-08-12 at 9.28.26 AM.png';
import  padge from "../imgs/247098189_584080323016743_1624283138537223290_n.jpg" 
import "../all.css"
import {  Slide } from "react-awesome-reveal";

const Header = (props) => {
    const [text] = useTypewriter({
        words: ['Software Engineer', 'Frontend Developer', 'Mobile App Developer', 'Designer'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    


      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvImage;
        link.download = 'your-cv-image.png'; // Change the file name and extension as needed
        link.click();
      };


  return (
   <div className="container my-5 p-5 w-100 h-100" id="header">
    <Slide cascade direction='left'>
   <div className="row d-flex justify-content-center align-items-center">
    <div className="col-lg-8 col-md-8 col-sm-12 ">
<h1 className={props.dark ? "p-2 text-white" : "p-2"}>
    Hello i'm <strong className='name'>
        Amr Khaled Marey
    </strong>
</h1>
<h2 className={props.dark ? "p-2 mt-2 text-white" : " mt-2 p-2"}>
       I'm a <strong className='name'>
        
        {text}
        </strong> 
      </h2>

      <button onClick={handleDownload} className='btno  mt-2 p-2 ms-2 text-center btn-lg'>Download My Cv </button> 
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12  mt-5 ">
        <img src={padge} alt={padge} className='img-fluid  my-padge' />
        </div>
</div>   
    </Slide>

   </div>
  )
}

export default Header