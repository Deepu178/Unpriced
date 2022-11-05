import { useState} from 'react';
import React from 'react';
import Modal from 'react-modal';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
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
    
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return (
    <div>
      <div>
      <button className="login" onClick={()=>setIsLoginModalOpen(true)}>Login</button >
        <button className="create" onClick={()=>setIsCreateModalOpen(true)}>Create an account</button>

    </div>
    <Modal isOpen={isCreateModalOpen} style={customStyles}>
    <div>
      <h3 id='create-heading'> Creat an account
        <button onClick={()=>setIsCreateModalOpen(false)} className="btn float-end"><b>x</b></button>
      </h3>
      <form action="../../../../api/v1/users" method='post' >
        <fieldset>
        <input type={"text"} name="name" placeholder="Full Name"/>
        <br/>
        <br/>
        <input type={'email'} name="email" placeholder="Enter Your Email"/>
        <br/>
        <br/>
        <input type={Number} name="number" placeholder="Phone Number" />
        <br/>
        <br/>
        <input type={"password"} name="password" placeholder="Create Password"/>
        <br/>
        <br/>
        <button id='create-btn' type='sumbit' >Create</button>
        </fieldset>
      </form>
    </div>
  </Modal>
  <Modal isOpen={isLoginModalOpen} style={customStyles}>
      <div>
        <h3 id='login-heading'>Login
      <button onClick={()=>setIsLoginModalOpen(false)}  className="btn float-end"><b>x</b></button>
      </h3>
      <form>
        <fieldset>
          <input type="email" placeholder='Enter your Email' />
          <br/>
          <br/>
          <input type="password" placeholder='Enter your password here'/>
          <br/>
          <br/>
          <button id='login-btn'>Login</button>
        </fieldset>
      </form>
       <div>
        <FacebookLogin
        appId="1124482858371534"
        autoLoad={true}
        fields="name,email,picture"
        textButton='Continue with facebook'
        cssClass='btn btn-primary'
        />
      </div>
      <div>
      <GoogleLogin
    clientId="977464933844-86ub2807vaipnhklrtm8e0vn9ko8s78h.apps.googleusercontent.com"
    buttonText="Login"
    // onSuccess={responseGoogle}
    // onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} cssClass="btn btn-primary"
  />
      </div> 
      </div>
    </Modal>
  </div>
  )
}
