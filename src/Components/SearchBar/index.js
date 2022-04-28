import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { switchFoodOrDrink } from '../../Services';

function SearchBar() {
  const history = useHistory();
  const radioSelected = useRef();
  const input = useRef();
  // const [oneLetter, setOneLetter] = useState(false);

  const validateOneLeter = () => {
    // setOneLetter(false);
    const verify = radioSelected.current.includes('?f=') && input.current.length > 1;
    // setOneLetter(verify);
    return verify;
  };

  const handleFetch = async () => {
    const urlPath = history.location.pathname.split('/')[1];
    console.log(urlPath);
    const typePath = radioSelected.current;
    const urlToFetch = `${typePath}${input.current}`;

    if (validateOneLeter()) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }

    switchFoodOrDrink[urlPath](urlToFetch).then((response) => {
      console.log(response);
    });
  };

  return (
    <form>
      <label htmlFor="search-input">
        <input
          type="text"
          data-testid="search-input"
          id="search-input"
          placeholder="Search"
          onChange={ ({ target }) => { input.current = target.value; } }
        />
      </label>

      <div>
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            name="search-radio"
            data-testid="ingredient-search-radio"
            id="ingredient-search-radio"
            onClick={ () => { radioSelected.current = 'filter.php?i='; } }
          />
          Ingredient
        </label>

        <label htmlFor="name-search-radio">
          <input
            type="radio"
            name="search-radio"
            data-testid="name-search-radio"
            id="name-search-radio"
            onClick={ () => { radioSelected.current = 'search.php?s='; } }
          />
          Name
        </label>

        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            name="search-radio"
            data-testid="first-letter-search-radio"
            id="first-letter-search-radio"
            onClick={ () => { radioSelected.current = 'search.php?f='; } }
          />
          First Letter
        </label>

        <button
          data-testid="exec-search-btn"
          type="button"
          onClick={ () => { handleFetch(); } }
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
