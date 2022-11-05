import { useState } from 'react';
import React from 'react';
import Modal from './Modal';

//import facebookLogin from 'react-facebook-login';
//import googleLogin from 'react-google-login';

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
      <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <div>
          <h3 id="create-heading"> Create an account</h3>
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
    </div>
  );
}
