import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getAppointments = () => async (dispatch, getState) => {
  const q = query(collection(db, "APPOINTMENT"));

  try {
    const querySnapshot = await getDocs(q);
    const temp = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      temp.push(doc.data());
    });
    dispatch({ type: "LIST_APPOINTMENTS", payload: temp });
  } catch (error) {
    console.log("error getting appointments", error);
  }

  //   try {
  //     const snapshot = await firestore.collection("APPOINTMENT").get();

  //     const temp = [];
  //     snapshot.forEach((doc) => {
  //       temp.push({ id: doc.id, ...doc.data() });
  //     });
  //     dispatch({ type: "LIST_APPOINTMENTS", payload: temp });
  //   } catch (error) {
  //     console.log("error getting appointments", error);
  //   }
};
