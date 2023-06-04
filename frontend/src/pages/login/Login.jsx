import React from 'react'
import bgImg from '../login/logo.jpg'
import { useForm } from 'react-hook-form';
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Form() {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm()
    // const onSubmit = data => console.log(data);

    // console.log(watch('username'));

    const history = useHistory();

    const [loginInput, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username: loginInput.username,
            password: loginInput.password
        }

        await axios.post('http://localhost:8000/api/login', data).then((res) => {
            // if (res.data.status === 200) {
                localStorage.setItem('token', res.data.token)
                window.location.href = '/'
            // }
            // else {
            //     alert(res.data.message)
            // }
            // localStorage.setItem('token', res.data.token)
            // window.location.href = '/'
            // history.push('/users')
        })
        

        // axios.post('http://localhost:8000/api/login', data).then((res) => {
        //     localStorage.setItem('token', res.data.token)
        //     window.location.href = '/'
        //     // history.push('/users')
        // })
    }
    
  return (
    <section>
        <div className="register">
            <div className="col-2">
               <img src={bgImg} alt="" />
            </div>
            <div className="col-1">
                <h2>Login</h2>
                <span>Enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                    <span>Username</span>
                    <input type="text" name='username' placeholder='Masukkan username' onChange={handleInput} value={loginInput.username} />
                    <span>Password</span>
                    <input type="password" name='password' placeholder='Masukkan password' onChange={handleInput} value={loginInput.password} />
                    {/* <Link to="/"> */}
                    <button className="loginButton">Login</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    </section>
  )
}