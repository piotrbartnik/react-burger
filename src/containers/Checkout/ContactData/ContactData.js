import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandles';
import * as actions from '../../../store/actions/index';
import {updateObject, checkValidity } from '../../../shared/utility'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          require: true
        },
        valid: false,
        touched: false
      },

      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          require: true
        },
        valid: false,
        touched: false
      },
      zip: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip code'
        },
        value: '',
        validation: {
          require: true,
          minLength: 5,
          maxLength: 10
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          require: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: '',
        validation: {
          require: true
        },
        valid: false,
        touched: false
      },
      time: {
        elementType: 'select',
        elementConfig: {
          options: [{ value: 'fastest', displayValue: 'Fastest' }, { value: 'cheapest', displayValue: 'Cheapest' }]
        },
        value: 'fastest',
        valid: true
      }
    },
    formIsValid: false
  }

  orderHandler = (event) => {
    event.preventDefault();

    const formData = {}
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price.toFixed(2),
      orderData: formData,
      userId: this.props.userId
    }

    this.props.onOrderBurger(order, this.props.token)
  }
 

  inputChangeHandler = (event, inputIdentifier) => {
   
    const updateFormElement = updateObject(this.state.orderForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.validation),
      touched: true
    });
    const updatedOrderForm = updateObject(this.state.orderForm, {
      [inputIdentifier]: updateFormElement
    })
    updatedOrderForm[inputIdentifier] = updateFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid })

  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (<form onSubmit={this.orderHandler}>
      {formElementsArray.map(formElement => (<Input key={formElement.id} elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig} value={formElement.config.value} changed={(event) => this.inputChangeHandler(event, formElement.id)} invalid={!formElement.config.valid} shouldValidate={formElement.config.validation}
        touched={formElement.config.touched} />))}
      <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
    </form>);
    if (this.props.loading) {
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

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));