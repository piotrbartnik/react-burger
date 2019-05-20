import React from 'react';
import classes from './Modal.module.css'

const Modal = (props) => {
 return (
    <div style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh ', opscity: props.show ? '1' : '0'}} className={classes.Modal}>
      {props.children}
    </div>
  )
 }



export default Modal;