import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { app } from "../firebase_config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const useFormSubmit = (id) => {
  console.log(app);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  let handleFormSubmit;

  const authentication = getAuth();

  //for submitting sign in form
  if (id === "login") {
    handleFormSubmit = async (userData, reset, initialValues) => {
      const { email, password } = userData;

      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          onSuccess(response, reset, initialValues);
        })
        .catch((error) => {
          onFailure(error);
        });
    };
  }
  //for submitting sign up form
  else {
    handleFormSubmit = async (userData, reset, initialValues) => {
      const authentication = getAuth();
      const { email, password } = userData;

      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          onSuccess(response, reset, initialValues);
        })
        .catch((error) => {
          onFailure(error);
        });
    };
  }

  const onSuccess = (response, reset, initialValues) => {
    navigate("/");
    localStorage.setItem("token", response._tokenResponse.refreshToken);
    reset(initialValues);
  };

  const onFailure = (error) => {
    const properErrorMessage = error.code
      .slice(5, error.code.length)
      .split("-")
      .join(" ");
    setErrorMessage(properErrorMessage);
  };

  return { errorMessage, handleFormSubmit };
};

export default useFormSubmit;
