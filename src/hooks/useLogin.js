import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from ".././utils/api_endpoint";

const useLogin = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (userData, reset, initialValues) => {
    try {
      const { data } = await API.post("apis/v1/auth/login", userData);

      localStorage.setItem("user", JSON.stringify(data.user));
      reset(initialValues);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.msg);
    }
  };

  return { errorMessage, handleLogin };
};

export default useLogin;
