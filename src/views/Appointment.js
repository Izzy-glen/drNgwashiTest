import React, { useState } from "react";
import { Modal } from "antd";
import InputForm from "../components/InputForm";
const Appointment = ({ open, setOpen, type, code }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 2500);
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
        footer={null}
      >
        <div>
          <InputForm handleOk={handleOk} loading={loading} editCode={code} />
        </div>
      </Modal>
    </>
  );
};
export default Appointment;
