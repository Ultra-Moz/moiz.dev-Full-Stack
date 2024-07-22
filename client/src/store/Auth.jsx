import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState("");

  const isLoggedIn = !!token;

  const storeTokenLS = (userToken) => {
    setToken(userToken);
    return localStorage.setItem("token", userToken);
  };

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setUserData("");
  };

  const LoginUser = (userToken, formData) => {
    setToken(userToken);
    setUserData(formData);
    localStorage.setItem("token", userToken);
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        console.log("User data:", data);
      } else {
        console.log("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.log("Couldn't authorize", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ storeTokenLS, LogoutUser, isLoggedIn, userData, LoginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return AuthContextValue;
};
