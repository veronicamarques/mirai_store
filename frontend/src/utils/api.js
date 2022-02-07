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
