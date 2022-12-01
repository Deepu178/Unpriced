import React from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useInput from '../../hooks/use-input';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../dashboard/Dashboard';
//import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';
import './index.scss';

// const responseGoogle = (response) => {
//   console.log(response);
// };

export default function Login({ show = false, onClose }) {
  const navigate = useNavigate();
  const { value: name, error: nameError, isValid: nameIsValid, reset: nameReset, blurHandler: nameBlurHandler, changeHandler: nameChangeHandler } = useInput({ required: 'Please enter your name!' });

  const {
    value: email,
    error: emailError,
    isValid: emailIsValid,
    reset: emailReset,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
  } = useInput({ required: 'Please enter your email!' });

  const {
    value: phone,
    error: phoneError,
    isValid: phoneIsValid,
    reset: phoneReset,
    blurHandler: phoneBlurHandler,
    changeHandler: phoneChangeHandler,
  } = useInput({ required: 'Please enter your phone!' });

  const {
    value: password,
    error: passwordError,
    isValid: passwordIsValid,
    reset: passwordReset,
    blurHandler: passwordBlurHandler,
    changeHandler: passwordChangeHandler,
  } = useInput({ required: 'Please enter your password!' });

  const resetForm = () => {
    nameReset();
    emailReset();
    phoneReset();
    passwordReset();
    onClose();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({
      nameIsValid,
      emailIsValid,
      phoneIsValid,
      passwordIsValid,
    });

    if (!emailIsValid || !phoneIsValid || !nameIsValid || !passwordIsValid) {
      // alert('invalid credentials');
      nameBlurHandler();
      emailBlurHandler();
      phoneBlurHandler();
      passwordBlurHandler();
      return navigate("/Dashboard");
    }

    const userData = {
      name,
      email,
      phone,
      password,
    };
    navigate("/Dashboard");
    console.log(userData);

    axios
      .post('http://localhost:8080/api/v1/users', userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //resetForm();
  };

  return (
    <div>
      <Modal isOpen={show} onClose={() => resetForm()}>
        <div>
          <h3 className="h-l login__heading">Create an account</h3>
          <form onSubmit={submitHandler}>
            <Input placeholder="Full Name" value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler} error={nameError} />

            <Input type="email" value={email} placeholder="Enter your Email" onChange={emailChangeHandler} onBlur={emailBlurHandler} error={emailError} />

            <Input type="tel" value={phone} placeholder="Enter your phone" onChange={phoneChangeHandler} onBlur={phoneBlurHandler} error={phoneError} />

            <Input type="password" value={password} placeholder="Create Password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} error={passwordError} />

            <Button size="large" type="submit">
              Create an Account
            </Button>
          </form>
          <div className="btn-grp">
            <div className="fb">
{/* <FacebookLogin appId="865366151290601" autoLoad={true} fields="name,email,picture," textButton="Continue with facebook" /> */}
            </div>
            <div className="google">
              {/* <GoogleLogin
                clientId="827982091533-r63rtar2ogioj6jtb7gvn9pu5augnshp.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                //onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              /> */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
