import React from "react";

const InfoBox = ({ type, total }) => {
  return (
    <div
      style={{
        width: "20%",
        height: "110px",
        overflow: "hidden",
        margin: "auto",
        background:
          type === "missed"
            ? "#EECECF"
            : type === "rescheduled"
            ? "#EEDAC1"
            : type === "pending"
            ? "skyblue"
            : "#CFD6CF",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        display: "flex",
        alignItems: "flex-start",
        padding: "0px 10px",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontWeight: "bolder",
        }}
      >
        {type === "missed"
          ? "Missed"
          : type === "rescheduled"
          ? "Rescheduled"
          : type === "pending"
          ? "Pending"
          : "Passed"}
      </p>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color:
            type === "missed"
              ? "#D1393D"
              : type === "rescheduled"
              ? "#E99F3E"
              : type === "pending"
              ? "blue"
              : "#4F7D67",
          marginTop: "-10px",
        }}
      >
        {total}
      </p>
    </div>
  );
};

export default InfoBox;
