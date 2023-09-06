const useAuth = () => {
  const token = localStorage.getItem("token");

  return token ? token : null;
};

export default useAuth;
