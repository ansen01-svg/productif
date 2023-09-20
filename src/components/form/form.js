import { useEffect, memo } from "react";
import { useFormSubmit } from "../.././hooks";
import { initialCredentials } from "../.././utils/objects";
import { useForm } from "react-hook-form";
import FieldHolder from "./field_holder";
import { Box } from "@mui/material";
import MessageHolder from "./message_holder";
import ButtonHolder from "./button_holder";

const Form = memo(({ type, autocomplete }) => {
  const loginPage = type === "login";

  const { errorMessage, handleFormSubmit } = useFormSubmit(type);

  const { register, handleSubmit, reset, setFocus, watch } = useForm({
    defaultValues: initialCredentials,
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const watchFields = watch();
  const disable = !watchFields.email || !watchFields.password;

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
      onSubmit={handleSubmit((data) =>
        handleFormSubmit(data, reset, initialCredentials)
      )}
    >
      <FieldHolder
        id="email"
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        register={register}
        autocomplete="email"
      />
      <FieldHolder
        id="password"
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        register={register}
        autocomplete={autocomplete}
      />
      {errorMessage && (
        <MessageHolder message={errorMessage} severity={"error"} />
      )}
      <ButtonHolder
        buttonTitle={loginPage ? "sign in" : "sign up"}
        disable={disable}
      />
    </Box>
  );
});

export default Form;
