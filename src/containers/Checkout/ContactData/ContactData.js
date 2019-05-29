import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
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
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
      .then(response => {
        console.log(order)
        this.setState({ loading: false });
        this.props.history.push('/')
      })
      .catch(error => { this.setState({ loading: false }) });
  }

  render() {
    let form = (<form>
      <input className={classes.Input} type="text" name="name" placeholder="your name" />
      <input className={classes.Input} type="email" name="email" placeholder="email" />
      <input className={classes.Input} type="text" name="street" placeholder="street" />
      <input className={classes.Input} type="text" name="postal" placeholder="postal" />
      <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
    </form>);
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your COntact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;