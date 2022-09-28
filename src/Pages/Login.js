import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const Admin = {
    username: "jbrnjak",
    password: "Inicijalni1",
  };
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details, "details");

    if (
      details.username === Admin.username &&
      details.password === Admin.password
    ) {
      alert("Uspješna prijava!");
      navigate("/Home");
      setUser({
        username: details.username,
      });
    } else if (details.username === "" && details.password === "") {
      setError("Please enter your username and password!");
    } else if (details.username === "") {
      setError("Please enter your username!");
    } else if (details.password === "") {
      setError("Please enter your password!");
    } else setError("The username or password is incorrect!");
  };
  return <LoginForm login={login} error={error} setError={setError} />;
}
