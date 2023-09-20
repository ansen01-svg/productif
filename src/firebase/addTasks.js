import { app, db } from "./firebase_config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";

import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const addDailyTasks = async (
  collectionName,
  task,
  startHrs,
  startMins,
  endHrs,
  endMins,
  startMeridiem,
  endMeridiem
) => {
  try {
    await addDoc(collection(db, collectionName), {
      task: task,
      start: `${startHrs}:${startMins} ${startMeridiem}`,
      end: `${endHrs}:${endMins} ${endMeridiem}`,
      completed: false,
      important: false,
      created: Timestamp.now(),
      createdBy: auth.currentUser.uid,
    });

    toast("New task added");
  } catch (error) {
    console.log(error);
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
      createdBy: auth.currentUser.uid,
    });
    toast("New task added");
  } catch (error) {
    toast("Opps! unable to add task");
  }
};

export { addDailyTasks, addWeeklyTasks };
