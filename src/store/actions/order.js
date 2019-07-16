import * as actionTypes from './actionsTypes';
import axios from '../../axios-order'

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
};

export const purchaseBurgerFails = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  }
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/order.json?auth=' + token, orderData)
      .then(response => {
        console.log(response.data)
        dispatch(purchaseBurgerSuccess(response.data.name, orderData))
      })
      .catch(error => {
        dispatch(purchaseBurgerFails(error))
      });
  }
}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}

export const fetchOrderSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    orders: orders
  }
}

export const fetchOrderFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDER_FAIL,
    error: error
  }
}

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
}

export const fetchOrders = (token) => {
  return dispatch => {
    dispatch(fetchOrderStart())
    axios.get('/order.json?auth=' + token)
    .then(response => {
      const fetchedOrders = [];
      for (let key in response.data) {
        fetchedOrders.push({...response.data[key], id:key})
      }
      dispatch(fetchOrderSuccess(fetchedOrders));
    })
    .catch(err => {
      dispatch(fetchOrderFail(err))
    })
  }
}