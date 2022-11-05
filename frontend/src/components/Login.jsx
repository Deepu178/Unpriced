import { useState } from 'react';
import React from 'react';
import Modal from './Modal';
//import facebookLogin from 'react-facebook-login';
//import googleLogin from 'react-google-login';

export default function Login({ show = false, onClose }) {
  return (
    <Modal isOpen={show} onClose={() => onClose()}>
      <div>
        <h3 id="create-heading">
          Create an account
          <button onClick={() => onClose()} className="btn float-end">
            <b>x</b>
          </button>
        </h3>
        <form action="">
          <fieldset>
            <input type={'text'} placeholder="Full Name" />
            <br />
            <br />
            <input type={'email'} placeholder="Enter Your Email" />
            <br />
            <br />
            <input type={Number} placeholder="Phone Number" />
            <br />
            <br />
            <input type={'password'} placeholder="Create Password" />
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
