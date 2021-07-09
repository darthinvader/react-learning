import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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

  const addIngredientHandler = (type) => {
    const updatedCount = ingredients[type] + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    const priceAddition = INGREDIENT_PRICES[type];
    setTotalPrice(totalPrice + priceAddition);
  };
  const removeIngridientHandler = (type) => {};
  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <BuildControls ingredientAdded={addIngredientHandler} />
    </Fragment>
  );
};

export default BurgerBuilder;
