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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // // Ignore these paths in the state
        // ignoredPaths: [
        //   "patients.0.createdDate",
        //   "appointments.0.creationDate",
        //   "appointments.0.appointmentDate",
        //   "payload.0.creationDate",
        //   "payload.0.appointmentDate",
        // ],
        // Ignore these action types
        ignoredActions: ["LIST_APPOINTMENTS", "LIST_PATIENTS"],
      },
    }),
});
