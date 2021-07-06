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
  const { isLoading, error, data, sendRequest } = useHttp();
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  useEffect(() => {
    console.log("Rendering Ingredients", ingredients);
  }, [ingredients]);

  const addIngredientHandler = useCallback((ingredient) => {
    // dispatchHttp({ type: "SEND" });
    // // setIsLoading(true);
    // fetch(
    //   "https://react-hooks-update-51300-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(ingredient),
    //     headers: { "Content-type": "application/json" },
    //   }
    // )
    //   .then((response) => {
    //     dispatchHttp({ type: "RESPONSE" });
    //     // setIsLoading(false);
    //     return response.json();
    //   })
    //   .then((responseData) => {
    //     dispatch({
    //       type: "ADD",
    //       ingredient: { id: responseData.name, ...ingredient },
    //     });
    //     // setIngredients((prevIngredients) => [
    //     //   ...prevIngredients,
    //     //   { id: responseData.name, ...ingredient },
    //     // ]);
    //   });
  }, []);

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      // dispatchHttp({ type: "SEND" });
      // setIsLoading(true);
      sendRequest(
        `https://react-hooks-update-51300-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
        "DELETE"
      );
    },
    [sendRequest]
  );

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients });
    // setIngredients(filteredIngredients);
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
