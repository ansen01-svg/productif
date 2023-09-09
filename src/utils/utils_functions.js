import { navigationItems } from "./arrays";
import moment from "moment";

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

const getLocation = () => {
  let location = window.location.href;
  console.log(location);
  if (location.includes("important")) {
    location = "Important";
  } else if (location.includes("tasks")) {
    location = "Tasks";
  } else {
    location = "My Day";
  }

  const page = navigationItems.find((item) => item.title === location);

  return { location, page };
};

const getCurrentDate = () => {
  let date = moment().format("dddd MMMM Do");

  const day = date.slice(0, 9);
  const monthAndDate = date.slice(9, -2);
  date = `${day}, ${monthAndDate}`;

  return date;
};

export {
  storeInSessionStorage,
  getFromSessionStorage,
  getPageIndex,
  clearSessionStorage,
  clearLocalStorage,
  clearFromStorages,
  getLocation,
  getCurrentDate,
};
