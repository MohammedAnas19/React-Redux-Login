import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form,Container} from 'react-bootstrap';
import {login} from '../actions';
import {useDispatch} from 'react-redux';

export default function Signin() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const dispatch = useDispatch();

    const userLogin =(e)=>{
        e.preventDefault();
        const user={email,password};

        dispatch(login(user));
    }
    return (
        <Container className="SigninContainer">
            <Form className="" onSubmit={userLogin}>
            <input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e)=>{setEmail(e.target.value)}}/>
            <input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e)=>{setPassword(e.target.value)}}/>
            <Button type="submit" className="pp-btn" block>
                Submit
            </Button>
            </Form>
            <p style={{marginTop:'1rem'}}>Don't have an Account ? <Link to="/signup">SIGN UP</Link></p>
        </Container>
    )
}
