import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  });

  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <div>Build Controls</div>
    </Fragment>
  );
};

export default BurgerBuilder;
