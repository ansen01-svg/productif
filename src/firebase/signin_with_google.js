import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { app, db } from "./firebase_config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
signInWithRedirect(auth, googleProvider);

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(res);
    // const token = credential.accessToken;

    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const getRedirect = async () => {
  try {
    const response = await getRedirectResult(auth);

    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential.accessToken;

    const user = response.user;
    console.log(token, user);
  } catch (error) {
    console.log(error);
  }
};

export { signInWithGoogle, getRedirect };
