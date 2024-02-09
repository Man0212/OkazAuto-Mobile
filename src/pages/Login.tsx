import React, { useState } from 'react';
import '../assets/Login.css';
import logo from '../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { IonLoading } from '@ionic/react';
import userService from '../services/user.service';
import { Result } from './store';


const Login: React.FC = () => {
  const [username, setUsername] = useState('john.doe@email.com');
  const [password, setPassword] = useState('motdepasse1');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const log = async () => {
    setLoading(true);
    try {
      const result: Result = await userService.login(username, password);
      if (result.success) {
        history.push("/step-1");
      } else {
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="top-content">
        <img src={logo} style={{ width: '100px' }} alt="Logo" />
      </div>
      <br />
      <div className="inputs">
        <input type="email" id="email" className="input" value={username} onChange={(event) => setUsername(event.target.value)} />
        <label htmlFor="email" className="input-label">
          Email or phone
        </label>
      </div>
      <br />
      <div className="inputs">
        <input type="password" id="pass" className="input" value={password} onChange={(event) => setPassword(event.target.value)} />
        <label htmlFor="pass" className="input-label">
          Password
        </label>
      </div>
      <br />
      <p className="color">Une application pour vendre des voitures d'occasion.</p>

      <a href="#" className="link-btn">
        Learn More
      </a>

      <div>
        <button style={{ background: 'none' }}>
          <Link to="/Sign">Create an account</Link>
        </button>

        <button type="submit" className="next-btn" style={{ float: 'right' }} onClick={log}>
          Login
        </button>
      </div>

      <IonLoading
        isOpen={loading}
        message={'Connecting...'}
      />
    </div>
  );
};

export default Login;
