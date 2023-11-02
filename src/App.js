import React, { useState ,useContext  } from 'react';



import './App.css';
import Home from './Home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./all.css"
import { AuthContext , AuthProvider } from './AuthContext';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const authcontext=useContext(AuthContext);
  function logout(){
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      authcontext.setAuth({});
  
  }
  const[dark,setDark]=useState(false);
  const toggle=()=>{
    setDark(!dark);

 }

  return (
    < div className={dark ? "bg-dark" : ""}>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <a href="/"  className='brandN navbar-brand'>Amr Khaled Marey</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">

 <a  href="/" className='nav-link'>
Home
            </a >
            <a  href="/#about" className='nav-link'>
About 
            </a >
            <a  href="/#skills" className='nav-link'>
Skills
            </a >
            <a  href="/#works" className='nav-link'>
Portfolio
            </a >
            <a  href="/#contact" className='nav-link'>
Contact
            </a >

          <button onClick={toggle} className='btno text-center p-2 '>
            {dark ? 'Light' : 'Dark'}
          </button>
          {authcontext.auth.email ? <div className='ms-2'> {''} 
    <button className='p-2 btnod text-center ' onClick={logout}>
Logout
    </button>
    </div> : <div className='text-center my-auto ms-2'>"You Need To Login"</div>}
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>




 












    {authcontext.auth.email ? 
      <Home dark={dark}  /> : <Login dark={dark}/>}
    </div>
  );
}

function AppStore(){
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  )
  }
  export default AppStore;
