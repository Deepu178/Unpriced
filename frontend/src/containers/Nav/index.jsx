import { useState } from 'react';
import Button from '../../components/Button';
import Login from '../Login/Login';
import Logo from '../../components/Logo';
import './index.scss';

const Nav = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <Login show={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <header className="navbar">
        <Logo />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Button variant="link" onClick={() => setIsLoginOpen(true)}>
                Login
              </Button>
            </li>
            <li className="nav__item">
              <Button onClick={() => setIsLoginOpen(true)}>Sign Up</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
