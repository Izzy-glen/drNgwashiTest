import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "antd";
import Appointment from "./views/Appointment";
import { getPatients } from "./redux/patients/patientsActions";
import { useDispatch } from "react-redux";
import { getAppointments } from "./redux/appointments/appointmentsActions";
import Home from "./views/Home";

function App() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("create");
  const showModal = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
    dispatch(getPatients());
  }, [dispatch]);
  return (
    <div className="App">
      <Home showModal={showModal} setType={setType} />

      <div style={{ width: "90%", textAlign: "right", margin: "1em 0em" }}>
        <Button type="primary" onClick={showModal}>
          +
        </Button>
      </div>

      <Appointment open={open} setOpen={setOpen} type={type} />
    </div>
  );
}

export default App;
