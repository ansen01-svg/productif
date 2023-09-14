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

const getCurrentDate = () => {
  let date = moment().format("dddd MMMM Do");
  return date;
};

const generateHrs = (limit) => {
  const hrsArray = [];
  const count = limit;

  for (let i = 0; i < count; i++) {
    if (i.toString().length === 1) {
      if (i === 9) {
        const obj = { id: i, count: String(i + 1) };
        hrsArray.push(obj);
      } else {
        const obj = { id: i, count: String(`0${i + 1}`) };
        hrsArray.push(obj);
      }
    } else if (i === 59) {
      const obj = { id: i, count: "00" };
      hrsArray.push(obj);
    } else {
      const obj = { id: i, count: String(i + 1) };
      hrsArray.push(obj);
    }
  }

  return hrsArray;
};

const generateWeek = () => {
  let week = [];
  const weekDays = 7;

  for (let i = 0; i < weekDays; i++) {
    if (i === 0) {
      const currentDate = moment().format("LL").split(" ");
      const day = currentDate[1].slice(0, 2);
      const month = currentDate[0];

      const eachDay = { id: i, day: `${day} ${month}` };
      week.push(eachDay);
    } else {
      const currentDate = moment().add(i, "days").format("LL").split(" ");
      const day = currentDate[1].slice(0, currentDate[1].length - 1);
      const month = currentDate[0];

      const eachDay = { id: i, day: `${day} ${month}` };
      week.push(eachDay);
    }
  }

  return week;
};

export {
  storeInSessionStorage,
  getFromSessionStorage,
  getPageIndex,
  clearSessionStorage,
  clearLocalStorage,
  clearFromStorages,
  getCurrentDate,
  generateHrs,
  generateWeek,
};
