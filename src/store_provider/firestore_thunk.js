import { db } from "../firebase/firebase_config";
import { collection, getDocs } from "firebase/firestore/lite";

const getDailyTasks = async () => {
  const dailyTasksCollection = collection(db, "dailyTasks");
  const dailyTasksSnapshot = await getDocs(dailyTasksCollection);
  const dailyTasks = dailyTasksSnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  return dailyTasks;
};

const getWeeklyTasks = async () => {
  const weeklyTasksCollection = collection(db, "weeklyTasks");
  const weeklyTasksSnapshot = await getDocs(weeklyTasksCollection);
  const weeklyTasks = weeklyTasksSnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  return weeklyTasks;
};

export { getDailyTasks, getWeeklyTasks };
