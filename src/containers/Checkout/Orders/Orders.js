import React, { Component } from 'react';
import axios from '../../../axios-order';
import Order from '../../../components/Order/Order';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandles'

class Orders extends Component {

  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios.get('/order.json')
    .then(response => {
      const fetchedOrders = [];
      for (let key in response.data) {
        fetchedOrders.push({...response.data[key], id:key})
      }
      this.setState({loading: false, orders: fetchedOrders})
    })
    .catch(err => {
      this.setState({loading: false})
    })
  }
  render() {
    return (
      <div>
       {this.state.orders.map(order => (
         <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
       ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);