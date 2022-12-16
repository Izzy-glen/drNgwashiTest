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

const InputForm = () => {
  // const { Option } = Select;
  // const selectAfter = (
  //   <Select defaultValue="am" onChange={handleSelectChange}>
  //     <Option value="am">AM</Option>
  //     <Option value="pm">PM</Option>
  //   </Select>
  // );

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  let code = uniqueNumGen(3);
  const [user, setUser] = useState({ code });

  const handleInputChange = (event, field) => {
    setUser({ ...user, [field]: event.target.value });
    // Object.assign({}, user, { [field]: event.target.value });

    console.log(user);
    return user;
  };

  const handleSelectChange = (value, field) => {
    setUser({ ...user, [field]: value });
    console.log(user);
    return user;
  };
  const handleDateChange = (value, field) => {
    setUser({ ...user, [field]: value });
    console.log(user);
    return user;
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
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
          <Input defaultValue={uniqueNumGen(3)} disabled />
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
            defaultValue="select"
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
            onChange={(date) => handleSelectChange(date, "appointmentDate")}
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
            onChange={(date) => handleSelectChange(date, "requestDate")}
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
            onChange={(value) => handleSelectChange(value, "time")}
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
          <Input onChange={(e) => handleInputChange(e, "noteBefore")} />
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
          <Input onChange={(e) => handleInputChange(e, "noteAfter")} />
        </Form.Item>
      </div>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={console.log(user)}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default InputForm;
