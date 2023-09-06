import { bottomNavigation } from "./arrays";
import API from "./api_endpoint";

const storeInSessionStorage = (key, value) =>
  sessionStorage.setItem(key, value);

const getFromSessionStorage = (key) => {
  const value = sessionStorage.getItem(key);

  return value;
};

const removeFromSessionStorage = (key) => sessionStorage.removeItem(key);

const clearSessionStorage = () => sessionStorage.clear();

const clearLocalStorage = () => localStorage.clear();

const clearFromStorages = () => {
  clearSessionStorage();
  clearLocalStorage();
};

const getPageIndex = (pageTitle) => {
  if (pageTitle === null) return 0;

  const currentPage = bottomNavigation.find((page) => page.title === pageTitle);
  return currentPage.id;
};

const signOut = async () => {
  try {
    await API.delete("apis/v1/auth/logout");
  } catch (error) {
    console.log(error);
  }
};

export {
  storeInSessionStorage,
  getFromSessionStorage,
  getPageIndex,
  removeFromSessionStorage,
  clearSessionStorage,
  clearLocalStorage,
  clearFromStorages,
  signOut,
};
