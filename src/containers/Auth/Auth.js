import React, { Component } from 'react';



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


  render() {
    return (
      <div>
        <form>

        </form>
      </div>
    );
  }
}

export default Auth;