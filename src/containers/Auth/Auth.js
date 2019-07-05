import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css'

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail Adress'
        },
        value: '',
        validation: {
          require: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          require: true,
          minLength: 7
        },
        valid: false,
        touched: false
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

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

  inputChangeHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.constrols[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    }
    this.setState({constrols: updatedControls})
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }
    const form = formElementsArray.map(formElement => (<Input key={formElement.id} elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig} value={formElement.config.value} changed={(event) => this.inputChangeHandler(event, formElement.id)} invalid={!formElement.config.valid} shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}/>))
    return (
      <div className={classes.Auth}>
        <form>
          {form}
        <Button btnType="Success">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Auth;