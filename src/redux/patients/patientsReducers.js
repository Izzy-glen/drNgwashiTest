import { LIST_PATIENTS } from "./patientTypes";

const patientsReducer = (state = [], action) => {
  const { type, payload } = action;
  if (type === LIST_PATIENTS) {
    const temp = [];
    for (const item of payload) {
      temp.push(item);
    }
    return [...temp];
  }
  return state;
};
export default patientsReducer;
