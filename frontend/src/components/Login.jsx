import React from 'react';
import Modal from './Modal';
//import facebookLogin from 'react-facebook-login';
//import googleLogin from 'react-google-login';

export default function Login({ show = false, onClose }) {
  const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
    const postURL = "http://localhost:8080/api/v1/users" //Our previously set up route in the backend
    fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // We should keep the fields consistent for managing this data later
            name:"",
            email:"",
            password:"",
            phone:{}
            
        })
    })
    .then(()=>{
        // Once posted, the user will be notified 
        alert('You have been added to the system!');
    })
}
  return (
    <Modal isOpen={show} onClose={() => onClose()}>
      <div>
        <h3 id="create-heading">
          Create an account
          <button onClick={() => onClose()} className="btn float-end">
            <b>x</b>
          </button>
        </h3>
        <form onSubmit={handleSubmit}>
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
