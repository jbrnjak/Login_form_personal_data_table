import React, { useState } from "react";

const INITAL_STATE = { username: "", password: "" };

function LoginForm({ login, error, setError }) {
  const [details, setDetails] = useState(INITAL_STATE);

  const submitHandler = (e) => {
    e.preventDefault();

    login(details);
  };

  const handleReset = () => {
    setError("");
    setDetails(INITAL_STATE);
  };

  console.log(error);
  console.log(setError);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login form</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Username"
              maxLength="30"
              name="username"
              id="username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
          </div>

          <div>
            <button className="form-group-button" type="submit">
              Submit
            </button>
          </div>

          <br></br>

          <div>
            <button
              className="form-group-button-reset"
              type="reset"
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
          <br></br>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
