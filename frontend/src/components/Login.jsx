import React, { useState } from 'react';
//mport {useState} from 'react';
import Modal from './Modal';
import axios from 'axios';
//import facebookLogin from 'react-facebook-login';
//import googleLogin from 'react-google-login';

export default function Login({ show = false, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [booked, setBooked] = useState(false);

  const onChangeName = (e) => {
    setName({ name: e.target.value });
  };
  const onChangeEmail = (e) => {
    setEmail({ email: e.target.value });
  };
  const onChangePhone = (e) => {
    setPhone({ phone: e.target.value });
  };
  const onChangePassword = (e) => {
    setPassword({ password: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const bookingData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    console.log(bookingData);

    axios
      .post('http://localhost:80/api/vi/users', bookingData)
      .then((res) => {
        console.log(res.data);
        setName(name);
        setEmail(email);
        setPhone(phone);
        setPassword(password);
      })
      .catch((error) => {
        console.log(error);
      });
    setBooked(true);
  };

  return (
    <Modal isOpen={show} onClose={() => onClose()}>
      <div>
        <h3 id="create-heading">
          Create an account
          <button onClick={() => onClose()} className="btn float-end">
            <b>x</b>
          </button>
        </h3>
        <form onSubmit={submitHandler}>
          <fieldset>
            <input type={'text'} onClick={onChangeName} placeholder="Full Name" />
            <br />
            <br />
            <input type={'email'} onClick={onChangeEmail} placeholder="Enter Your Email" />
            <br />
            <br />
            <input type={Number} onClick={onChangePhone} placeholder="Phone Number" />
            <br />
            <br />
            <input type={'password'} onClick={onChangePassword} placeholder="Create Password" />
            <br />
            <br />
            <button id="create-btn" type="sumbit">
              Create
            </button>
          </fieldset>
        </form>
      </div>
    </Modal>
  );
}
