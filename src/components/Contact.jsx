import React ,{useRef} from 'react'

import { Bounce } from "react-awesome-reveal";

import "../all.css"
import 'sweetalert2/dist/sweetalert2.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ib9q8mf', 'template_7hn7tqe', form.current, 'Go-F8wtSOy7rYOqzq')
    Swal.fire(
      'Your message is sent successfully!',
      'You clicked the button!',
      'success'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='my-5 p-5' id="contact">
      <Bounce cascade>

         <div className="panner4 d-flex flex-column justify-content-center align-items-center text-center">
<h1 className={props.dark ? "m-2 text-center text-light" : "m-2 text-center"}>
  #let's _talk
</h1 >
<p className={props.dark ? "m-2 text-center text-light" : "m-2 text-center"}>LEAVE A MESSAGE, We love to hear from you!</p>
      </div>
<div className="container">
      
       
        <div className="row mx-2 my-5 contact">
          <div className="col-lg-12">

            <h2 className={props.dark ? "m-2 text-center text-light" : "m-2 text-center"}>
  I want to hear from you
  </h2>

            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column justify-content-center align-items-center ">


              <div className="row ">


                <div className="col-md-12 m-2">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" placeholder="Name" />

                  </div>
                </div>
    
</div>
              <div className="row ">
                <div className="col-md-12 m-2">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control" placeholder="Email"/>
    
                  </div>
                </div>
          

              </div>
        

        
              <div className="row">
                <div className="col-md-12 m-2">
                  <div className="md-form mb-0">
                    <input type="text" id="phone" name="phone" placeholder="Phone" className="form-control"/>
 
                  </div>
                </div>
              </div>
        

        
              <div className="row">

          
                <div className="col-md-12 m-2">

                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder="Message"></textarea>
                   
                  </div>

                </div>
              </div>
           
<div className="row">
  <div className="col-md-12">
                  <input type="submit" value="Send" className="btno btn-md p-2 m-2"/>
  </div>
</div>
            </form>
          </div>


        </div>
</div>
      </Bounce>
     



    </div>
  )
}

export default Contact