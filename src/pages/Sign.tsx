import React from 'react';
import '../assets/Login.css';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="container">
      <div className="top-content">
        <p><span>O</span>kaz</p>
      </div>
      <br />
      <div className="inputs">
        <input type="name" id="name" className="input" />
        <label htmlFor="name" className="input-label">
          Name
        </label>
      </div>
      <br />
      <div className="inputs">
        <input type="email" id="email" className="input" />
        <label htmlFor="email" className="input-label">
          Email or phone
        </label>
      </div>
      <br />
      <div className="inputs">
        <input type="password" id="pass" className="input" />
        <label htmlFor="pass" className="input-label">
          password
        </label>
      </div>

      <br />
      <p className="color">une application pour vendre des voitures d'occasion.</p>

      <a href="#" className="link-btn">
        Learn More
      </a>

      <div >
        <button style={{ background: 'none' }}>
          <Link to="/Login">already have an account</Link>
        </button>

        <button type="submit" className="next-btn" style={{ float: 'right' }}>
        <Link to="/Login" style={{color:'white'}}>Sign</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
