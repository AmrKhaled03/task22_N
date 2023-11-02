import React, { useState, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import"../all.css";
const Footer = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const formattedTime = currentTime.toLocaleTimeString();
  return (
    <Slide cascade direction='up'>

       <div className="footer text-center my-5 p-5">
    
<h4 className={props.dark ? "text-light": "text-dark"}>
   Made with love by 
  <strong className='brand-name'>
  {''} :  AMR KHALED MAREY
  </strong>
</h4>
<p>
<p className={props.dark ? "text-light": "text-dark"}>Time :  {formattedTime}</p>
</p>
   </div> 
    </Slide>
 
  )
}

export default Footer