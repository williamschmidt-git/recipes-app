import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import { onClipboardClicked } from '../services/supportFunctions';
import ApplicationContext from '../context/ApplicationContext';

function DoneDrinks() {
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDrink(doneRecipes);
  }, []);

  const history = useHistory();
  const { clipboardState, setClipboardState } = useContext(ApplicationContext);
  const filteredDrinks = drink.filter(({ type }) => type === 'bebida');
  return (
    <div>
      {
        filteredDrinks.map((item, index) => (
          <div key={ index }>
            <button
              type="button"
              onClick={ () => history.push(`/bebidas/${item.id}`) }
            >
              <div>
                <img
                  src={ item.image }
                  alt="bebida"
                  data-testid={ `${index}-horizontal-image` }
                />
                <p data-testid={ `${index}-horizontal-name` }>{ item.name }</p>
              </div>
            </button>
            <p data-testid={ `${index}-horizontal-top-text` }>{ item.alcoholicOrNot }</p>
            <button
              src={ shareIcon }
              type="button"
              onClick={ () => {
                const pathname = `/bebidas/${item.id}`;
                onClipboardClicked(setClipboardState, pathname);
              } }
            >
              <img src={ shareIcon } alt="compartilhar" />
            </button>
            <p>
              {clipboardState ? 'Link copiado!' : ''}
            </p>
            <p data-testid={ `${index}-horizontal-done-date` }>{ item.doneDate }</p>
          </div>
        ))
      }
    </div>
  );
}

export default DoneDrinks;
