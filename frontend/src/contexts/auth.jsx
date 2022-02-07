import React, { createContext, useState, useEffect } from "react";
import { createSession } from "../utils/api";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const sessionUser = sessionStorage.getItem("user");

    const savedUser = localUser ? localUser : sessionUser;

    if (savedUser && !User) {
      setUser(JSON.parse(savedUser));
    }

    //setLoading(false);
  }, []);

  const login = async (email, password, staySigned) => {
    try {
      const response = await toast.promise(createSession(email, password), {
        pending: "Enviando informações",
        success: {
          render() {
            return "Logado com sucesso!";
          },
        },
        error: {
          render({ data }) {
            if (data.response) return `${data.response.data.error}`;
            else return "Falha na comunicação com o servidor.";
          },
        },
      });

      const user = {
        authenticated: true,
        ...response.data,
      };
      if (staySigned) localStorage.setItem("user", JSON.stringify(user));
      else sessionStorage.setItem("user", JSON.stringify(user));

      setUser(user);
    } catch (err) {
      setUser({});
    }
  };

  const logout = () => {};

  return <AuthContext.Provider value={{ User, Loading, login, logout }}>{children}</AuthContext.Provider>;
};
