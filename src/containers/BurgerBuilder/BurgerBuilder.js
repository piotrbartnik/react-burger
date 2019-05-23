import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/BuildControls/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../../src/components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandles';


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 0.7,
  bacon: 0.4
}
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    axios.get('https://burger-order-21bd7.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data })
      }
      )
      .catch(error => {
        this.setState({error: true})
      })
  }

  updatePurchaseState(ingredients) {

    let sum = Object.keys(ingredients).map(igKey => { return ingredients[igKey] }).reduce((a, b) => a += b);
    this.setState({ purchasable: sum > 0 });

  }



  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCounted = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCounted;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
    console.log(this.state.purchasing)
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContiunueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: "Pioter B",
        addres: {
          street: 'Test1',
          zip: "44-303",
          country: "poland"
        },
        email: 'test@o2.pl',
        time: 'fast'
      }
    }

    axios.post('/order.json', order)
      .then(response => { this.setState({ loading: false, purchasing: false }) })
      .catch(error => { this.setState({ loading: false, purchasing: false }) });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    
    let orderSummary = null;
    
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls ordered={this.purchaseHandler} purchasable={this.state.purchasable} price={this.state.totalPrice} ingredientAdded={this.addIngredientHandler} ingredientDeleted={this.removeIngredientHandler} disabled={disabledInfo} />
        </Aux>);
        orderSummary = <OrderSummary purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContiunueHandler} ingredients={this.state.ingredients} />;
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

export default withErrorHandler(BurgerBuilder, axios);