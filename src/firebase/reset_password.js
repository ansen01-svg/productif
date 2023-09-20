import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { app } from "./firebase_config";

const auth = getAuth(app);

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
  }
};

export default sendPasswordReset;
