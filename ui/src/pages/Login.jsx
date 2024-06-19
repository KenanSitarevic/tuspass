import { useState, useEffect } from 'react';
import axios from "axios";
import { getIsAuthenticated, storeUserInLocalStorage } from '../lib/common';
import { storeTokenInLocalStorage } from '../lib/common';
import Loader from "../components/loader/Loader";
import '../index.css';
import { APP_ROUTES } from '../utils/constants';

import { Link } from "react-router-dom";


// const { authenticated } = Authenticated();


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(true);
  // const [authenticated, setAuthenticated ] = useState(false);

  useEffect(() => {
    async function isAuthenticated() {
      const authenticated = await getIsAuthenticated();
      if (await authenticated) {
        window.location.href = APP_ROUTES.DASHBOARD;
      } else {
        setLoader(false)
      }
    }
    isAuthenticated();
  }, []); 

  const loginUser = async (email, password) => {
    try {
      setLoader(true);
      const response = await axios.post(import.meta.env.VITE_API_URL + 'login',{
        email: email,
        password: password
      })
      if (!response?.data?.token) {
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      storeUserInLocalStorage(response.data)
      window.location.href = APP_ROUTES.DASHBOARD;
    }
    catch (err) {
      console.log('Some error occured during signing in: ', err);
    }
    finally {
      setLoader(false);
      
    }
  };

  function handleChangeEmail() {
    setEmail({value: event.target.value});
  }
  function handleChangePassword() {
    setPassword({value: event.target.value});
  }

  function handleSubmit() {
    loginUser(email.value, password.value)
    event.preventDefault();
  }

  return (
    <div className="full-screen d-flex justify-content-center col-4 mx-auto">
    <div className='d-flex w-100'>
    <div className="row justify-content-center align-items-center w-50 bg-white">
      <div className="row text-center w-50">
        { loader ? 
        <div className="row justify-content-center align-items-center">
        <Loader/> 
        </div> :
        <>
        <h1 className='login-header-size'>Login</h1>
        <h3 className='font-weight-light login-subtitle-size'>Please enter your credentials</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type='email' className='form-control input-font-size' id='email' placeholder='Email' value={email.value} onChange={handleChangeEmail}></input>
          </div>
          <div className='form-group'>
            <input type='password' className='form-control input-font-size mt-3' id='password' placeholder='Password' value={password.value} onChange={handleChangePassword}></input>
          </div>
          <div className='form-group mt-5'>
            <input className='btn btn-outline-dark input-font-size' type='submit' value="Login" />
          </div>
        </form>
        </>
        }
      </div>
    </div>
    <div className='login-bg d-flex justify-content-center align-items-center w-50'>
        <h1 className='mx-5 big-text'>WELCOME BACK!</h1>

    </div>
    </div>

  </div>

  )
}

export default Login