import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

function Profile({ history }) {
  const user = localStorage.getItem('user');
  return (
    <div data-testid="page-title">
      <h2 data-testid="profile-email">
        { user }
      </h2>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={
          (() => {
            history.push('/receitas-feitas');
          })
        }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={
          (() => {
            history.push('/receitas-favoritas');
          })
        }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={
          (() => {
            localStorage.clear();
            history.push('/');
          })
        }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Profile;
