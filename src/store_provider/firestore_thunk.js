import { fetchDailyTasks, fetchWeeklyTasks } from "../firebase/getTasks";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase_config";

const auth = getAuth(app);

const getDailyTasks = async () => {
  const data = await fetchDailyTasks(auth.currentUser.uid);
  return data;
};

const getWeeklyTasks = async () => {
  const data = await fetchWeeklyTasks(auth.currentUser.uid);
  return data;
};

export { getDailyTasks, getWeeklyTasks };
