import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState ({
    username: '',
    password: ''
  });

  const useHandler = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
    console.log(login)
  };

  const handleLogin = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', login)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
      .catch(err =>
        console.log(
          err.message
        )
      );
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
        <input type='text' name='username' value={login.username} onChange={useHandler} placeholder='username'/>
        <input type='password' name='password' value={login.password} onChange={useHandler} placeholder='password'/>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
