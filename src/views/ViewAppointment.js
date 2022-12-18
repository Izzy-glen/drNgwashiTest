import React, { useState } from "react";
import { Modal } from "antd";
import FormView from "../components/FormView";
const ViewAppointment = ({ open, setOpen, code }) => {
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
        title={<h2>View Appointment #{code}</h2>}
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
          <FormView handleOk={handleOk} loading={loading} editCode={code} />
        </div>
      </Modal>
    </>
  );
};
export default ViewAppointment;
