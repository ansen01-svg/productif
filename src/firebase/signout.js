import { signOut, getAuth } from "firebase/auth";
import { app } from "./firebase_config";

const auth = getAuth(app);

const logout = () => {
  signOut(auth);
};

export default logout;
