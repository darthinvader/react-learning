import React, { useEffect, useCallback, useReducer, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get here!");
  }
};

const Ingredients = () => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra } = useHttp();

  useEffect(() => {
    console.log("Rendering Ingredients", ingredients);
  }, [ingredients]);

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest(
      "https://react-hooks-update-51300-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
      "POST",
      JSON.stringify(ingredient),
      ingredient
    );
  }, []);

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://react-hooks-update-51300-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId
      );
    },
    [sendRequest]
  );

  useEffect(() => {
    if (reqExtra) {
      dispatch({ type: "DELETE", id: reqExtra });
    } else {
      dispatch({
        type: "ADD",
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const clearError = useCallback(() => {
    // dispatchHttp({ type: "CLEAR" });
  }, []);

  const ingredientList = useMemo(
    () => (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    ),
    [ingredients, removeIngredientHandler]
  );

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
