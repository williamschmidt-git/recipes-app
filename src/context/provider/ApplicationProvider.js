import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MealsContext from '../ApplicationContext';

function ApplicationProvider({ children }) {
  const [mealsArray, setMealsArray] = useState([]);
  const [drinksArray, setDrinksArray] = useState([]);
  const [mealsCategory, setMealsCategory] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [recipesByMealsCategory, setMealsRecipes] = useState([]);
  const [recipesByDrinkCategory, setDrinksRecipes] = useState([]);
  const [changeArrayToRender, setArrayToRender] = useState(false);
  const [mealSelected, setMealSelected] = useState('');
  const [drinkSelected, setDrinkSelected] = useState('');
  const [selectedDrink, setSelectedDrink] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState([]);
  const [storedProgress, setStoredProgress] = useState({});
  const [clipboardState, setClipboardState] = useState(false);

  const contextValue = {
    mealsArray,
    setMealsArray,
    drinksArray,
    setDrinksArray,
    mealsCategory,
    setMealsCategory,
    drinksCategory,
    setDrinksCategory,
    recipesByMealsCategory,
    setMealsRecipes,
    recipesByDrinkCategory,
    setDrinksRecipes,
    changeArrayToRender,
    setArrayToRender,
    mealSelected,
    setMealSelected,
    drinkSelected,
    setDrinkSelected,
    selectedDrink,
    setSelectedDrink,
    selectedMeal,
    setSelectedMeal,
    storedProgress,
    setStoredProgress,
    clipboardState,
    setClipboardState,
  };

  return (
    <MealsContext.Provider
      value={ contextValue }
    >
      {children}
    </MealsContext.Provider>
  );
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
