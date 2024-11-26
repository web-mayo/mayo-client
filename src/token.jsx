export const LOCALSTORAGE_TOKEN = "mayo-Token";
export const LOCALSTORAGE_REFRESH_TOKEN = "mayo-Refresh";

export const getToken = () => localStorage.getItem(LOCALSTORAGE_TOKEN);
export const getAccessToken = () => {
  return localStorage.getItem(LOCALSTORAGE_TOKEN);
};
export const getRefreshToken = () => {
  return localStorage.getItem(LOCALSTORAGE_REFRESH_TOKEN);
};

export const setToken = (token) => {
  localStorage.setItem(LOCALSTORAGE_TOKEN, token);
};

export const logIn = (token) => {
  setToken(token);
  localStorage.setItem("role", "Customer");
  window.location.href = "/";
};

export const removeToken = () => {
  localStorage.removeItem(LOCALSTORAGE_TOKEN);
  localStorage.removeItem(LOCALSTORAGE_REFRESH_TOKEN);
};

export const logOut = () => {
  removeToken();
  localStorage.removeItem("role");
  localStorage.removeItem("Token-time");
  window.location.href = "/";
};

export const token = getToken();
export const isLoggined = Boolean(token);
