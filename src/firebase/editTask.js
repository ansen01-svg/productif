import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase_config";

const editTaskDetails = () => {};

const changeTaskStatus = async (id, task, completed) => {
  const taskDocRef = doc(db, task, id);

  try {
    await updateDoc(taskDocRef, {
      completed: !completed,
    });
  } catch (err) {
    console.log(err);
  }
};

const changeTaskImportance = async (id, task, important) => {
  const taskDocRef = doc(db, task, id);

  try {
    await updateDoc(taskDocRef, {
      important: !important,
    });
  } catch (err) {
    console.log(err);
  }
};

export { editTaskDetails, changeTaskStatus, changeTaskImportance };
