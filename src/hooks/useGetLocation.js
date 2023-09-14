import { useLocation } from "react-router-dom";
import { navigationItems } from "../utils/arrays";

const useGetLocation = () => {
  const location = useLocation().pathname;
  let pageLocation = "";

  if (location.includes("important")) {
    pageLocation = "Important";
  } else if (location.includes("my-week")) {
    pageLocation = "My Week";
  } else if (location.includes("tasks")) {
    pageLocation = "Tasks";
  } else {
    pageLocation = "My Day";
  }

  const page = navigationItems.find((item) => item.title === pageLocation);

  return { pageLocation, page };
};

export default useGetLocation;
