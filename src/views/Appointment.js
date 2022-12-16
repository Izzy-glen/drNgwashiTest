import React, { useState } from "react";
import { Button, Modal } from "antd";
import InputForm from "../components/InputForm";
const Appointment = ({ open, setOpen, type }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        title={
          type === "create" ? (
            <h2>New Appointment</h2>
          ) : (
            <h2>Edit Appointment</h2>
          )
        }
        centered
        width="100%"
        style={{
          background: "seashells",
        }}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <div>
          <InputForm />
          {/* <Button
            key="getPatients"
            type="primary"
            loading={loading}
            onClick={() => getPatients()}
          >
            Get Patients
          </Button> */}
        </div>
      </Modal>
    </>
  );
};
export default Appointment;
