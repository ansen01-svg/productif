import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "./firebase_config";

const db = getFirestore(app);

const fetchDailyTasks = async (uid) => {
  try {
    const dailyTasksref = collection(db, "dailyTasks");

    const q = query(dailyTasksref, where("createdBy", "==", uid));
    const dailyTasksSnapshot = await getDocs(q);

    const dailyTasks = dailyTasksSnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return dailyTasks;
  } catch (error) {
    console.log(error);
  }
};

const fetchWeeklyTasks = async (uid) => {
  try {
    const weeklyTasksref = collection(db, "weeklyTasks");

    const q = query(weeklyTasksref, where("createdBy", "==", uid));

    const weeklyTasksSnapshot = await getDocs(q);
    const weeklyTasks = weeklyTasksSnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return weeklyTasks;
  } catch (error) {
    console.log(error);
  }
};

export { fetchDailyTasks, fetchWeeklyTasks };
