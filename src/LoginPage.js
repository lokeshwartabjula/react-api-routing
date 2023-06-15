import React, { useState } from 'react';
import { Badge, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: email,
            password: password,
          })
    };
    fetch('https://express-t4.onrender.com/api/login', requestOptions)
        .then(response => response.json())

    const response = await fetch('https://express-t4.onrender.com/api/login', requestOptions);

    console.log('response',response);
    console.log('response.ok',response.ok);
    console.log('response.status',response.status);
    console.log('response.statusText',response.statusText);
    console.log('response.body',response.body);
    
    if (response.ok ) {
    //   history.push('/profile');
    
      navigate('/profile');
    } else {
      // Handle login error
      alert('Login failed.');   
    }
  };

  return (
    <div className='flex_container'>
      <h1><Badge bg="primary">Login Page</Badge></h1>
      <Form onSubmit={handleLogin} className="flex_container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
      {/* <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type= variant="primary">Login</Button>
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}

export default LoginPage;
