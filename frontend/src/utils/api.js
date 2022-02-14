import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const registerAccount = async (name, email, password) => {
  return api.post("/users", {
    name,
    email,
    password,
  });
};

export const createSession = async (email, password) => {
  return api.post("/login", {
    email,
    password,
  });
};

export const confirmEmail = async (token) => {
  return api.get(`/confirmation/${token}`);
};

export const sendPasswordReset = async (email) => {
  return api.get(`/password-reset/${email}`);
};

export const sendPasswordChange = async (token, password) => {
  return api.put(`/password-change`, { token, password });
};
