import axios from "axios";
axios.defaults.baseURL = `http://localhost:3001/api/v1`;

const fetchProfile = () => {
  return axios.post("/user/profile").then((response) => response.data.body);
};

const login = (email, password) => {
  return axios
    .post("/user/login", {
      email,
      password,
    })
    .then((response) => {
      const validToken = response.data.body.token;
      axios.defaults.headers = { Authorization: `Bearer ${validToken}` };
      return fetchProfile();
    })
    .catch((error) => {
      throw error.response.data;
    });
};
const updateProfile = (firstName, lastName) => {
  return axios
    .put("/user/profile", {
      firstName,
      lastName,
    })
    .then((response) => response.data.body);
};

const api = { login, fetchProfile, updateProfile };
export default api;
