import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  TimePicker,
} from "antd";
import { uniqueNumGen } from "../features/unqueNumberGenerator";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../redux/appointments/appointmentsActions";

const FormView = ({ handleOk, loading, editCode }) => {
  const allUsers = useSelector((state) => Object.values(state.patients));

  const userToEdit = allUsers?.map((user) => user.uniqueCode === editCode);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(createAppointment(user)).then(() => handleOk());
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  let code = uniqueNumGen(allUsers.length + 1);
  const [user, setUser] = useState({});

  const handleInputChange = (event, field) => {
    setUser({ ...user, [field]: event.target.value });
    // Object.assign({}, user, { [field]: event.target.value });

    return user;
  };

  const handleSelectChange = (value, field) => {
    setUser({ ...user, [field]: value });
    return user;
  };

  const handleDateChange = (value, field) => {
    setUser({ ...user, [field]: value.$d });
    return user;
  };

  return (
    <Form
      name="basic"
      initialValues={
        userToEdit.length
          ? {
              uniqueCode: userToEdit.uniqueCode,
              address: userToEdit.address,
              age: userToEdit.age,
              city: userToEdit.city,
              email: userToEdit.email,
              firstTime: userToEdit.firstTime,
              gender: userToEdit.gender,
              name: userToEdit.name,
              appointmentDate: userToEdit.appointmentDate,
              noteBefore: userToEdit.noteBefore,
              phone: userToEdit.phone,
              requestDate: userToEdit.requestDate,
              status: userToEdit.status,
              time: userToEdit.time,
            }
          : {
              remember: true,
            }
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <h3>General Information</h3>

      <div
        className="flexRow"
        style={{
          borderBottom: "2px solid black",
        }}
      >
        <Form.Item
          label="Unique Code"
          name="uniqueCode"
          style={{ width: "10%" }}
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input your username!",
          //   },
          // ]}
        >
          <Input defaultValue={code} disabled />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          style={{ width: "30%", padding: "0px 10px" }}
          rules={[
            {
              required: true,
              message: "Please input full names!",
            },
          ]}
        >
          <Input onChange={(e) => handleInputChange(e, "name")} />
        </Form.Item>
        <Form.Item
          label="Sex"
          name="sex"
          style={{ width: "30%", padding: "0px 10px" }}
          rules={[
            {
              required: true,
              message: "Please select the appropriate gender",
            },
          ]}
        >
          <Select
            defaultValue={"select"}
            onChange={(value) => handleSelectChange(value, "gender")}
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
              {
                value: "others",
                label: "Others",
              },
              {
                value: "notSay",
                label: "Prefer not to Specify",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          style={{ width: "30%", padding: "0px 10px" }}
          rules={[
            {
              required: true,
              message: "Please input phone number!",
            },
          ]}
        >
          <InputNumber
            style={{ minWidth: "100%" }}
            onChange={(event) => handleSelectChange(event, "phone")}
          />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          style={{ width: "10%", padding: "0px 10px" }}
          rules={[
            {
              required: true,
              message: "Please input age!",
            },
          ]}
        >
          <InputNumber
            style={{ minWidth: "100%" }}
            onChange={(event) => handleSelectChange(event, "age")}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          style={{ width: "30%", padding: "0px 10px" }}
          rules={[
            {
              required: true,
              message: "Please input email!",
            },
          ]}
        >
          <Input onChange={(e) => handleInputChange(e, "email")} />
        </Form.Item>
      </div>

      <h3>Appointment Information</h3>

      <div className="flexRow">
        <Form.Item
          label="Appointment Date"
          name="appointmentDate"
          className="appInfoInput"
          rules={[
            {
              required: true,
              message: "Please input date of appointment!",
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%", height: "35px", padding: "0px 10px" }}
            onChange={(date) => handleDateChange(date, "appointmentDate")}
          />
        </Form.Item>
        <Form.Item
          label="First time?"
          name="firstTime"
          className="appInfoInput"
          rules={[
            {
              required: true,
              //   message: "Please input full names!",
            },
          ]}
        >
          <Select
            defaultValue="select"
            onChange={(value) => handleSelectChange(value, "firstTime")}
            options={[
              {
                value: "no",
                label: "No",
              },
              {
                value: "yes",
                label: "Yes",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Request Date"
          name="requestDate"
          className="appInfoInput"
          rules={[
            {
              required: true,
              message: "Please select the Request Date",
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%", height: "35px", padding: "0px 10px" }}
            onChange={(date) => handleDateChange(date, "requestDate")}
          />
        </Form.Item>
        <Form.Item
          label="Appointment Status"
          name="appointmentStatus"
          className="appInfoInput"
          rules={[
            {
              required: true,
              message: "Please input Appointment Status!",
            },
          ]}
        >
          <Select
            defaultValue="select"
            onChange={(value) => handleSelectChange(value, "status")}
            options={[
              {
                value: "passed",
                label: "Passed",
              },
              {
                value: "missed",
                label: "Missed",
              },
              {
                value: "rescheduled",
                label: "Rescheduled",
              },
              {
                value: "pending",
                label: "Pending",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Time"
          name="time"
          className="appInfoInput"
          rules={[
            {
              required: true,
              message: "Please Appointment Time!",
            },
          ]}
        >
          <TimePicker
            style={{ width: "100%", height: "35px", padding: "0px 10px" }}
            onChange={(value) => handleDateChange(value, "time")}
          />
        </Form.Item>
      </div>

      <h3>Address Information</h3>
      <div
        className="flexRow"
        style={{
          justifyContent: "flex-start",
        }}
      >
        <Form.Item
          label="Address 1"
          name="address"
          className="appInfoInput"
          rules={[
            {
              required: true,
              message: "Please input Address!",
            },
          ]}
        >
          <Input onChange={(e) => handleInputChange(e, "address")} />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          className="appInfoInput"
          rules={[
            {
              required: true,
              message: "Please input City!",
            },
          ]}
        >
          <Input onChange={(e) => handleInputChange(e, "city")} />
        </Form.Item>
      </div>

      <h3>Notes</h3>
      <div
        className="flexRow"
        style={{
          justifyContent: "flex-start",
        }}
      >
        <Form.Item
          label="Before Appointment"
          name="noteBefore"
          style={{ width: "30%", padding: "0px 10px" }}
          rules={[
            {
              message: "Before appointment notes!",
            },
          ]}
        >
          <TextArea
            rows={4}
            onChange={(e) => handleInputChange(e, "noteBefore")}
            placeholder="Type before session note...."
          />
        </Form.Item>

        <Form.Item
          label="After Appointment"
          name="noteAfter"
          style={{ width: "30%", padding: "0px 10px" }}
          rules={[
            {
              message: "After appointment notes!",
            },
          ]}
        >
          <TextArea
            rows={4}
            onChange={(e) => handleInputChange(e, "noteAfter")}
            placeholder="Type after session note...."
          />
        </Form.Item>
      </div>

      <Form.Item
        style={{
          width: "100%",
          textAlign: "right",
        }}
      >
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          style={{ background: "red" }}
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormView;
