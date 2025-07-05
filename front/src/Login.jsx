import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {

    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');
    const naviGate = useNavigate()

    async function login(){

        let result = await fetch("http://localhost:2500/login", {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email, password })
        })
        result = await result.json();
        // if(result.auth) {
            localStorage.setItem("token", result.auth);
            naviGate('/booking')
        // } else {
        //     alert("Invalid password")
        // }
    }

    return(
      <>
      <div className='login-page'>
        <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
        >
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
        </FloatingLabel><br/>
        <Button type='button' variant="primary" onClick={login} >Login</Button>
      </div>
        
    </>
    )
}

export default Login