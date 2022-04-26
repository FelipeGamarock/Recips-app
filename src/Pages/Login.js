import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="email">
          Email
          <input
            name="email"
            data-testid="email-input"
            id="email"
            type="email"
            // value={ email }
            // onChange={}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            data-testid="password-input"
            id="password"
            type="password"
            // value={ password }
            // onChange={}
          />
        </label>

        <button
          type="button"
          data-testid="login-submit-btn"
          // disabled={ isDisabled }
          // onClick={}
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
