import React from 'react';
// import Header from '.../Componentes/Header';
import { useHistory } from 'react-router-dom';

function Profile() {
  const email = localStorage.getItem('user');

  const history = useHistory();

  function buttonLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div>
      <p data-testid="profile-email">{ email }</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>

      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes
      </button>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => buttonLogout() }
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
