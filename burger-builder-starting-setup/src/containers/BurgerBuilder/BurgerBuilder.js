import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchaseState = (updatedIngredients) => {
    const sum = Object.keys(updatedIngredients)
      .map((key) => {
        return updatedIngredients[key];
      })
      .reduce((acc, val) => (acc += val), 0);

    setPurchasable(sum > 0);
  };

  const purchaseHandle = () => {
    setPurchasing(true);
  };

  const addIngredientHandler = (type) => {
    const updatedCount = ingredients[type] + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    const priceAddition = INGREDIENT_PRICES[type];
    setTotalPrice(totalPrice + priceAddition);

    setPurchasable(true);
  };
  const removeIngridientHandler = (type) => {
    if (ingredients[type] === 0) return;
    const updatedCount = ingredients[type] - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    setIngredients(updatedIngredients);
    updatedIngredients[type] = updatedCount;

    const priceSubtraction = INGREDIENT_PRICES[type];
    setTotalPrice(totalPrice - priceSubtraction);
    updatePurchaseState(updatedIngredients);
  };

  const disabledInfo = {
    ...ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <Fragment>
      <Modal show={purchasing}>
        <OrderSummary ingredients={ingredients} />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngridientHandler}
        disabled={disabledInfo}
        purchasable={purchasable}
        ordered={purchaseHandle}
        price={totalPrice}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
