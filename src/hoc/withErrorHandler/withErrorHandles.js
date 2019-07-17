import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }
    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      })
      this.resInterceptors = axios.interceptors.response.use(null, error => {
        this.setState({error: error});
       
      })
    }

    componentWillUnmount () {
      
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.request.eject(this.resInterceptors);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }
    render() {
      return (
        <Aux>
          <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
        </Modal>
          <WrapperComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler;