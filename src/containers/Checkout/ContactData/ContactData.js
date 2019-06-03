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
          value: '',
          valid: true
        }      
    },
    loading: false,
    formIsValid: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {}
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }

    axios.post('/order.json', order)
      .then(response => {
    
        this.setState({ loading: false });
        this.props.history.push('/')
      })
      .catch(error => { this.setState({ loading: false }) });
  }
  
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.require) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updateFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }

    updateFormElement.value = event.target.value;
    updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation);
    updatedOrderForm[inputIdentifier] = updateFormElement;
    updateFormElement.touched = true;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
    }
    console.log(formIsValid)
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})

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
        touched={formElement.config.touched}/>))}
      <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
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