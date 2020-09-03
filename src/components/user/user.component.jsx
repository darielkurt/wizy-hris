import React from "react";

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils'

import "./user.styles.scss";

const User = ({ currentUser }) => (
  <div className="user">
    <div className="image-container">
      <span className='image-holder'></span>
    </div>
    <div className="user-details">
    <span className="name">{
      currentUser ?
      currentUser.displayName
    : 'walang user'}</span>
    <span className="username">{
      currentUser ?
      currentUser.email
    : 'walang user'}</span>
    {
      currentUser?
      <Link className='option' to='/signin' onClick={() => auth.signOut()}>SIGN OUT</Link>
      :
      <Link className='option' to='/signin'>SIGN IN</Link>
    }
    </div>
  </div>
);

export default User;