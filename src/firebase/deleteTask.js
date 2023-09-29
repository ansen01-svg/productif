import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase_config";

const deleteTask = async (collectionName, id) => {
  const taskDocRef = doc(db, collectionName, id);

  try {
    await deleteDoc(taskDocRef);
  } catch (err) {
    console.log(err);
  }
};

export default deleteTask;
