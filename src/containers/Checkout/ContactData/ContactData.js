import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-order';

class COntactData extends Component {
  state = {
    name: '',
    email: '', 
    adress: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients)
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.props,
      customer: {
        name: "Pioter B",
        addres: {
          street: 'Test1',
          zip: "44-303",
          country: "poland"
        },
        email: 'test@o2.pl',
        time: 'fast'
      }
    }

    axios.post('/order.json', order)
      .then(response => { this.setState({ loading: false, purchasing: false }) })
      .catch(error => { this.setState({ loading: false, purchasing: false }) });
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your COntact Data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="your name" />
          <input className={classes.Input} type="email" name="email" placeholder="email" />
          <input className={classes.Input} type="text" name="street" placeholder="street" />
          <input className={classes.Input} type="text" name="postal" placeholder="postal" />
          <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>
      </div>
    );
  }
}

export default COntactData;