import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

let controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => ( 
  <div className={classes.BuildControls}>
   <p>Current Price: {props.price.toFixed(2)}</p>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} added={() => props.ingredientAdded(ctrl.type)} deleted={() => props.ingredientRemoved(ctrl.type)} disable={props.disabled[ctrl.type]} />
    ))}
    <button disabled={!props.purchasable} className={classes.OrderButton} onClick={props.ordered}>
      {props.isAuth ? 'ORDER NOW!' : 'Signup'}</button>
  </div>
);

export default buildControls;