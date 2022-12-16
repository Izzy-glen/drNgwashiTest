const appointmentReducer = (state = [], action) => {
  const { type, payload } = action;
  if (type === "LIST_APPOINTMENTS") {
    const temp = [];
    for (const item of payload) {
      temp.push(item);
    }
    return [...temp];
  }
  return state;
};
export default appointmentReducer;
