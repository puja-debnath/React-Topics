import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [Username, sestUsername] = useState(" ");
  const [password, setpassword] = useState(" ");

  const { setUser } = useContext(UserContext);
  
  const handleSubmmit = (e) => {
    e.preventDefault();
    setUser({ Username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={Username}
        onChange={(e) => sestUsername(e.target.value)}
        placeholder="Username"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmmit}>Submmit</button>
    </div>
  );
};

export default Login;
