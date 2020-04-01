import React, { createContext } from "react";

const UserContext = createContext({
  name: "",
  username: "",
  email: "",
  password: "",
  user: {},
  handleInputChange: () => {},
  handleLogin: () => {},
  handleRegisterUser: () => {},
});

export default UserContext;
