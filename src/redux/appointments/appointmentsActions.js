import { collection, getDocs, query } from "firebase/firestore";
import { db, firestore } from "../../firebase-config";
import { LIST_APPOINTMENTS } from "./appointmentTypes";
import { uniqueNumGen } from "../../features/unqueNumberGenerator";

export const getAppointments = () => async (dispatch, getState) => {
  const q = query(collection(db, "APPOINTMENT"));

  try {
    const querySnapshot = await getDocs(q);
    const temp = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      temp.push(doc.data());
    });
    dispatch({ type: LIST_APPOINTMENTS, payload: temp });
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

export const createAppointment = (user) => async (dispatch, getState) => {
  const sn = getState().patients.length + 1;
  let code = uniqueNumGen(sn);
  user.uniqueCode = code;

  try {
    const res = await firestore
      .collection("CLIENTS")
      .doc(code)
      .set({ ...user });

    if (res === undefined) {
      window.location.reload();
    } else {
      console.log("Result:", res);
    }
  } catch (error) {
    console.log("Failed:", error);
  }
};
