import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Registration() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[mobile, setMobile] = useState('');
    const[password, setPassword] = useState('');
    const naviGate = useNavigate()


    async function register() {

        let result = await fetch("http://localhost:2500/patient/register", {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name, email, mobile, password })
        })
        result = await result.json();
         if(result.auth) {
            localStorage.setItem("token", result.auth);
            naviGate('/booking')
         } else {
            alert("Not able to register try after sometime")
         }

    }

    return(
      <>
      <div className='login-page'>
        <FloatingLabel
                controlId="floatingInput"
                label="Enter your Name"
                className="mb-3"
        >
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="eg. Tim Brown" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Email Address">
            <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="tim@gmail.com" />
        </FloatingLabel>

        <FloatingLabel
                controlId="floatingInput"
                label="Mobile"
                className="mb-3"
        >
        <Form.Control type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder="+91-9999-222-444" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        </FloatingLabel><br/>

         <Button type='button' variant="primary" onClick={register} >Submit</Button>

      </div>
        
    </>
    )
}

export default Registration