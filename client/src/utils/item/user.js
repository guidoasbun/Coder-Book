import axios from "axios";

const User = {
  registerUser: (user) => axios.post("/api/users/register", user),
  loginUser: (user) => axios.post("/api/users/login", user),
};

export default User