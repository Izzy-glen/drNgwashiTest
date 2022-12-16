import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Button } from "antd";
import Appointment from "./views/Appointment";
import { getPatients } from "./redux/patients/patientsActions";
import { useDispatch } from "react-redux";
import { getAppointments } from "./redux/appointments/appointmentsActions";
import { uniqueNumGen } from "./features/unqueNumberGenerator";

function App() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={showModal}>
          Create
        </Button>
        {/* <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Button onClick={() => dispatch(getAppointments())}>
          Get Appointments
        </Button>
        <Button onClick={() => dispatch(getPatients())}>Get Patients</Button>
        <Button onClick={() => uniqueNumGen(3)}>Get Unique Code</Button>
      </header>

      <Appointment open={open} setOpen={setOpen} type="create" />
    </div>
  );
}

export default App;
