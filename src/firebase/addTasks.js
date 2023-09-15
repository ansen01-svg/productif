import { db } from "./firebase_config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const addDailyTasks = async (
  collectionName,
  task,
  startHrs,
  startMins,
  endHrs,
  endMins
) => {
  try {
    await addDoc(collection(db, collectionName), {
      task: task,
      start: `${startHrs} : ${startMins}`,
      end: `${endHrs} : ${endMins}`,
      completed: false,
      important: false,
      created: Timestamp.now(),
    });
    toast("New task added");
  } catch (error) {
    toast("Opps! unable to add task");
  }
};

const addWeeklyTasks = async (collectionName, startDate, endDate, task) => {
  try {
    await addDoc(collection(db, collectionName), {
      start: startDate,
      end: endDate,
      task: task,
      completed: false,
      important: false,
      created: Timestamp.now(),
    });
    toast("New task added");
  } catch (error) {
    toast("Opps! unable to add task");
  }
};

export { addDailyTasks, addWeeklyTasks };
