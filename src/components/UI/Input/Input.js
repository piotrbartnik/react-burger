import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input className={classes.Input} {...props.elementConfig} value={props.value} />
      break;
    case ('textarea'):
      inputElement = <textarea className={classes.Input} {...props.elementConfig} value={props.value} />
      break;
    case ('select'):
      inputElement = (
        <select className={classes.Input} value={props.value} >
          {props.elementConfig.options.map(option => (
            <option value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input className={classes.Input} {...props.elementConfig} value={props.value} />
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
};

export default input;