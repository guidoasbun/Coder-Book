import React, { createContext } from "react";

const UserContext = createContext({
  name: "",
  username: "",
  email: "",
  password: "",
  user: {},
  handleInputChange: () => {},
  handleRegisterUser: () => {},
});

export default UserContext;
