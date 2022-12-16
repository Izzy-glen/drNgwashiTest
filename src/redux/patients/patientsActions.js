import { collection, getDocs, query } from "firebase/firestore";
import { db, firestore } from "../../firebase-config";

export const getPatients = () => async (dispatch, getState) => {
  const q = query(collection(db, "CLIENTS"));

  try {
    const querySnapshot = await getDocs(q);
    const temp = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      temp.push(doc.data());
    });
    dispatch({ type: "LIST_PATIENTS", payload: temp });
  } catch (error) {
    console.log("error getting patients", error);
  }

  //   try {
  //     const snapshot = await firestore.collection("CLIENTS").get();

  //     const temp = [];
  //     snapshot.forEach((doc) => {
  //       temp.push({ id: doc.id, ...doc.data() });
  //     });
  //     dispatch({ type: "LIST_PATIENTS", payload: temp });
  //   } catch (error) {
  //     console.log("error getting patients", error);
  //   }
};
