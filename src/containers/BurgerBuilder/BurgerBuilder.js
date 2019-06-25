import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/BuildControls/OrderSummary/OrderSummary';
import Spinner from '../../../src/components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandles';
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-order';



class BurgerBuilder extends Component {
  state = {
    purchasing: false
  }

  componentDidMount() {
    console.log(this.props);
    this.props.onInitIngredients();
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

    let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls ordered={this.purchaseHandler} purchasable={this.updatePurchaseState(this.props.ings)} price={this.props.price} ingredientAdded={this.props.onIngredientAdded} ingredientDeleted={this.props.onIngredientRemoved} disabled={disabledInfo} />
        </Aux>);
      orderSummary = <OrderSummary price={this.props.price} purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContiunueHandler} ingredients={this.props.ings} />;
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
    price: state.totalPrice,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () =>dispatch(burgerBuilderActions.initIngredients())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));