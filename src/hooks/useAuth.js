const useAuth = () => {
  const user = localStorage.getItem("user");

  return user ? user : null;
};

export default useAuth;
