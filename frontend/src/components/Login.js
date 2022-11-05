import { useState } from 'react';
import React from 'react';
import Modal from './Modal';
//import facebookLogin from 'react-facebook-login';
//import googleLogin from 'react-google-login';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div>
        <button className="login" onClick={() => setIsModalOpen(true)}>
          Login
        </button>
        <button className="create" onClick={() => setIsModalOpen(true)}>
          Create an account
        </button>
      </div>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div>
          <h3 id="create-heading">
            {' '}
            Creat an account
            <button onClick={() => setIsModalOpen(false)} className="btn float-end">
              <b>x</b>
            </button>
          </h3>
          <form action="../../../api/v1/users" method='POST'>
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
    </div>
  );
}
