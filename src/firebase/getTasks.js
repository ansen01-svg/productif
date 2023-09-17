import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase_config";

const useGetTasks = async () => {
  // const dailyTasksQuery = query(
  //   collection(db, "dailyTasks"),
  //   orderBy("created")
  // );
  // onSnapshot(dailyTasksQuery, (querySnapshot) => {
  //   dispatch(
  //     setDailyTasks(
  //       querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // });

  const weeklyTasksQuery = query(
    collection(db, "weeklyTasks"),
    orderBy("created")
  );
  onSnapshot(weeklyTasksQuery, (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    console.log(data);
  });
};

export default useGetTasks;
