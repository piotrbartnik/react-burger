import React from 'react';
import logoImg from '../../assets/images/logo.png';
import classes from './Logo.module.css';


const logo = (props) => {
 return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="Burger"/>
    </div>
 );
};

export default logo ;