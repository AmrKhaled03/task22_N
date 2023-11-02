import React from 'react'

import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'


import "./all.css"
const Home = (props) => {
 



  return (
<>


<Header dark={props.dark}/>
<About id='about' dark={props.dark}/>
<Skills id='skills' dark={props.dark}/>
<Works id='portfolio' dark={props.dark}/>
<Contact id='contact' dark={props.dark}/>
<Footer dark={props.dark}/>

</>
  )
}

export default Home