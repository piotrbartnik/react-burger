import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {
 return (
   <div onClick={props.clicked}>Menu</div>
 );
};

export default drawerToggle;