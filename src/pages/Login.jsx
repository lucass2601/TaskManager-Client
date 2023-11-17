import { useState } from "react";

const Login = () => {
  const [userHasAccount, setUserHasAccount] = useState(true);

  const loginPageStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const userRegister = (event) => {
    event.preventDefault();
  };

  const userLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container" style={loginPageStyling}>
      {userHasAccount ? (
        <form onSubmit={userLogin}>
          <h1>Login</h1>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />

          <small>
            <a onClick={() => setUserHasAccount(false)}>
              Don't have an account?
            </a>
          </small>

          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={userRegister}>
          <h1>Create Account</h1>

          <div className="grid">
            <label htmlFor="firstname">
              First name
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
                required
              />
            </label>

            <label htmlFor="lastname">
              Last name
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                required
              />
            </label>
          </div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />

          <label htmlFor="repeat-password">Repeat Password</label>
          <input
            type="password"
            id="repeat-password"
            name="repeat-password"
            placeholder="Repeat Password"
            required
          />

          <small>
            <a onClick={() => setUserHasAccount(true)}>
              Already have an account?
            </a>
          </small>

          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Login;
