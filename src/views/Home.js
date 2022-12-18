import Search from "antd/es/transfer/search";
import React, { useEffect, useState } from "react";
import InfoBox from "../components/InfoBox";
import { useSelector } from "react-redux";
import DataTable from "../components/DataTable";

const Home = ({ users = [], showModal, setType, showViewModal }) => {
  const [results, setResults] = useState([]);
  const allUsers = useSelector((state) => Object.values(state.patients));

  const [missed] = useState([]);
  const [passed] = useState([]);
  const [rescheduled] = useState([]);
  const [pending] = useState([]);

  useEffect(() => {
    if (allUsers.length) {
      allUsers.map((item) => {
        switch (item.status) {
          case "missed":
            missed.push(item);
            break;
          case "pending":
            pending.push(item);
            break;
          case "rescheduled":
            rescheduled.push(item);
            break;
          case "passed":
            passed.push(item);
            break;

          default:
            break;
        }

        return allUsers;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allUsers.length]);

  const handleInputChange = (e) => {
    if (e.target.value !== "") {
      users.map((user) =>
        user.name.includes(
          e.target.value ? setResults([user]) : setResults(users)
        )
      );
    }
  };
  return (
    <div>
      <div
        className="flexRow"
        style={{
          width: "90%",
          justifyContent: "space-between",
          margin: "auto",
          alignItems: "center",
          color: "crimson",
        }}
      >
        <div
          style={{
            width: "30%",
            padding: "30px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Appointments</h2>
          <div
            style={{
              width: "25%",
              height: "5px",
              background: "crimson",
              marginTop: "-1em",
            }}
          ></div>
        </div>
        <div style={{ width: "30%", padding: "40px 0px" }}>
          <Search
            placeholder="Input Patient's name"
            // onSearch={onSearch}
            onChange={(e) => handleInputChange(e)}
            style={{
              width: 200,
            }}
            allowClear
          />
        </div>
      </div>
      <div
        className="flexRow"
        style={{
          height: "180px",
          width: "90%",
          margin: "auto",
        }}
      >
        <InfoBox type="missed" total={missed.length} />
        <InfoBox type="rescheduled" total={rescheduled.length} />
        <InfoBox type="pending" total={pending.length} />
        <InfoBox type="passed" total={passed.length} />
      </div>
      <div
        style={{
          width: "90%",
          margin: "auto",
        }}
      >
        <DataTable
          data={results.length ? results : allUsers}
          showModal={showModal}
          showViewModal={showViewModal}
          setType={setType}
        />
      </div>
    </div>
  );
};

export default Home;
