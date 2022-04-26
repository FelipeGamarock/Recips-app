import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            id="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid="password-input"
            id="password"
          />
        </label>

        <button
          type="button"
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
