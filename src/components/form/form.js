import { useEffect, memo } from "react";
import { useLogin, useRegister } from "../.././hooks";
import {
  initialLoginCredentials,
  initialRegisterCredentials,
} from "../.././utils/objects";
import { useForm } from "react-hook-form";
import LoginFormHolder from "./login_form_holder";
import RegisterFormHolder from "./register_form_holder";

const Form = memo((props) => {
  const { width, height, fields } = props;

  const { errorMessage: loginErrorMessage, handleLogin } = useLogin();
  const {
    message: registerMessage,
    errorMessage: registerErrorMessage,
    handleRegister,
  } = useRegister();

  const loginPage = +fields !== 3;
  const initialState = loginPage
    ? initialLoginCredentials
    : initialRegisterCredentials;

  const { register, handleSubmit, reset, setFocus, watch } = useForm({
    defaultValues: initialState,
  });

  const handleFormSubmit = loginPage ? handleLogin : handleRegister;

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  if (loginPage) {
    return (
      <LoginFormHolder
        width={width}
        height={height}
        handleFormSubmit={handleFormSubmit}
        handleSubmit={handleSubmit}
        register={register}
        reset={reset}
        initialState={initialState}
        loginErrorMessage={loginErrorMessage}
        watch={watch}
      />
    );
  }

  return (
    <RegisterFormHolder
      width={width}
      height={height}
      handleFormSubmit={handleFormSubmit}
      handleSubmit={handleSubmit}
      register={register}
      reset={reset}
      initialState={initialState}
      registerMessage={registerMessage}
      registerErrorMessage={registerErrorMessage}
      watch={watch}
    />
  );
});

export default Form;
