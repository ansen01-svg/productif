import FieldHolder from "./field_holder";
import ButtonHolder from "./button_holder";
import MessageHolder from "./message_holder";
import { Box } from "@mui/material";

const LoginFormHolder = (props) => {
  const {
    width,
    height,
    handleFormSubmit,
    handleSubmit,
    register,
    reset,
    initialState,
    loginErrorMessage,
    watch,
  } = props;

  const watchFields = watch();
  const disable = !watchFields.email || !watchFields.password;

  return (
    <>
      <Box
        component="form"
        sx={{
          width: width,
          height: height,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
        onSubmit={handleSubmit((data) =>
          handleFormSubmit(data, reset, initialState)
        )}
      >
        <FieldHolder
          id="email"
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          register={register}
        />
        <FieldHolder
          id="password"
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          register={register}
        />
        {loginErrorMessage && (
          <MessageHolder message={loginErrorMessage} severity={"error"} />
        )}
        <ButtonHolder buttonTitle="Sign in" disable={disable} />
      </Box>
    </>
  );
};

export default LoginFormHolder;
