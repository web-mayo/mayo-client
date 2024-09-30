export const LOCALSTORAGE_TOKEN = "mayo-Token";

export const getToken = () => localStorage.getItem(LOCALSTORAGE_TOKEN);
export const getAccessToken = () => {
  return localStorage.getItem("access");
};
export const getRefreshToken = () => {
  return localStorage.getItem("refresh");
};

export const setToken = (token) => {
  localStorage.setItem(LOCALSTORAGE_TOKEN, token);
};

export const logIn = (token) => {
  setToken(token);
  // window.location.href = "/";
};

export const removeToken = () => {
  localStorage.removeItem(LOCALSTORAGE_TOKEN);
};

export const logOut = () => {
  removeToken();
  window.location.href = `${process.env.PUBLIC_URL}`;
};

export const token = getToken();
export const isLoggined = Boolean(token);
