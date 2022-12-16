import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import appointmentReducer from "../redux/appointments/appointmentsReducers";
import patientsReducer from "../redux/patients/patientsReducers";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    appointments: appointmentReducer,
    patients: patientsReducer,
  },
});
