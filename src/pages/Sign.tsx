import React, { useState } from 'react';
import '../assets/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { SignLanguage } from '@mui/icons-material';
import userService from '../services/user.service';
import { IonLoading } from '@ionic/react';
import { Button } from '@mui/material';

const Login: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const history = useHistory();
  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await userService.sign(name, email, password);
      history.push('/Login');
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="container">
      <div className="top-content">
        <p><span>O</span>kaz</p>
      </div>
      <br />
      <div className="inputs">
        <input type="name" id="name" className="input" value={name} onChange={(event)=>setName(event.target.value)}/>
        <label htmlFor="name" className="input-label">
          Name
        </label>
      </div>
      <br />
      <div className="inputs">
        <input type="email" id="email" className="input"  value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <label htmlFor="email" className="input-label">
          Email or phone
        </label>
      </div>
      <br />
      <div className="inputs">
        <input type="password" id="pass" className="input"  value={password} onChange={(event)=>setPassword(event.target.value)}/>
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

        <button type="submit" className="next-btn" style={{ float: 'right' }}  onClick={handleClick}>
          <span style={{color:'white'}}>Sign</span>
        </button>
      </div>
      {/* <IonLoading
        isOpen={loading}
        message={'Création de compte...'}
      /> */}
    </div>
  );
};

export default Login;
