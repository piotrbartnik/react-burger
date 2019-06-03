import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
          },
          value: ''
        },

        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Street'
          },
          value: ''
        },
        zip: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Zip code'
          },
          value: ''
        },
        country: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Country'
          },
          value: ''
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your email'
          },
          value: ''
        },
        time: {
          elementType: 'select',
          elementConfig: {
            options: [{ value: 'fastest', displayValue: 'Fastest' }, { value: 'cheapest', displayValue: 'Cheapest' }]
          },
          value: ''
        },
      
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,

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
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (<form>
      {formElementsArray.map(formElement => (<Input key={formElement.id} elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig} value={formElement.config.value} />))}
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