import React from 'react';
import '../assets/Login.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="container">
      <div className="top-content">
        <img src={logo} style={{width:'100px'}} />
      </div>
      <br/>
      <div className="inputs">
        <input type="email" id="email" className="input" />
        <label htmlFor="email" className="input-label">
          Email or phone
        </label>
      </div>
      <br/>
      <div className="inputs">
        <input type="pass" id="pass" className="input" />
        <label htmlFor="pass" className="input-label">
          password
        </label>
      </div>
      <br/>
      <p className="color">une application pour vendre des voitures d'occasion.</p>

      <a href="#" className="link-btn">
        Learn More
      </a>

      <div >
        <button style={{ background: 'none' }}>
          <Link to="/Sign">create an account</Link>
        </button>

        <button type="submit" className="next-btn" style={{ float: 'right' }}>
        <Link to="/Step-1" style={{color:'white'}}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
