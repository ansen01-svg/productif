import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase_config";

// update particular field of a task
const editTaskDetails = async (
  collectionName,
  id,
  fieldsToUpdateArray = []
) => {
  const taskDocRef = doc(db, collectionName, id);

  if (fieldsToUpdateArray.length === 1) {
    try {
      await updateDoc(taskDocRef, {
        task: fieldsToUpdateArray[0],
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      await updateDoc(taskDocRef, {
        start: fieldsToUpdateArray[0],
        end: fieldsToUpdateArray[1],
      });
    } catch (err) {
      console.log(err);
    }
  }
};

// change task status from uncomplete to complete or vice versa
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

// change task status from unimportant to important or vice versa
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
