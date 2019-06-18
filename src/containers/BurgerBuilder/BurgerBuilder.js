import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/BuildControls/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../../src/components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandles';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'



class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    // console.log(this.props)
    // axios.get('https://burger-order-21bd7.firebaseio.com/ingredients.json')
    //   .then(response => {
    //     this.setState({ ingredients: response.data })
    //   }
    //   )
    //   .catch(error => {
    //     this.setState({ error: true })
    //   })
  }

  updatePurchaseState(ingredients) {

    let sum = Object.keys(ingredients).map(igKey => { return ingredients[igKey] }).reduce((a, b) => a += b);
    return sum > 0;

  }


  purchaseHandler = () => {
    this.setState({ purchasing: true });
    console.log(this.state.purchasing)
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContiunueHandler = () => {
      this.props.history.push('/checkout')
  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls ordered={this.purchaseHandler} purchasable={this.updatePurchaseState(this.props.ings)} price={this.props.price} ingredientAdded={this.props.onIngredientAdded} ingredientDeleted={this.props.onIngredientRemoved} disabled={disabledInfo} />
        </Aux>);
      orderSummary = <OrderSummary price={this.props.price} purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContiunueHandler} ingredients={this.props.ings} />;
    } 
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));