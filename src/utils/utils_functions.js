import { navigationItems } from "./arrays";

const storeInSessionStorage = (key, value) =>
  sessionStorage.setItem(key, value);

const getFromSessionStorage = (key) => {
  const value = sessionStorage.getItem(key);

  return value;
};

const clearSessionStorage = () => sessionStorage.clear();

const clearLocalStorage = () => localStorage.clear();

const clearFromStorages = () => {
  clearSessionStorage();
  clearLocalStorage();
};

const getPageIndex = (pageTitle) => {
  if (pageTitle === null) return 0;

  const currentPage = navigationItems.find((page) => page.title === pageTitle);
  return currentPage.id;
};

export {
  storeInSessionStorage,
  getFromSessionStorage,
  getPageIndex,
  clearSessionStorage,
  clearLocalStorage,
  clearFromStorages,
};
