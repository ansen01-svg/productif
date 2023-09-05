import axios from "axios";

const getUser = async () => {
  try {
    const { data } = await axios.get("apis/v1/users/getCurrentUser");
    return data.user;
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
