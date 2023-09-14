import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { setDailyTasks, setWeeklyTasks } from "../store_provider/app_slice";
import { useDispatch } from "react-redux";

const useGetTasks = () => {
  const dispatch = useDispatch();

  const dailyTasksQuery = query(
    collection(db, "dailyTasks"),
    orderBy("created")
  );
  onSnapshot(dailyTasksQuery, (querySnapshot) => {
    dispatch(
      setDailyTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  });

  const weeklyTasksQuery = query(
    collection(db, "weeklyTasks"),
    orderBy("created", "desc")
  );
  onSnapshot(weeklyTasksQuery, (querySnapshot) => {
    dispatch(
      setWeeklyTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  });
};

export default useGetTasks;
