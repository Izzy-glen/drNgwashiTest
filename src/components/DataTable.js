import React, { useState, useRef } from "react";
import { Button, Input, Space, Table } from "antd";
import { formatDate, formatTime } from "../features/formatDate";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
// import ViewAppointment from "../views/ViewAppointment";

const DataTable = ({ data, showModal, setType }) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  // const [showViewModal, setShowViewModal] = useState(false);

  // const [code, setCode] = useState("")
  // const viewModal = (text) => {
  //   setCode(text)
  //   setShowViewModal(true);

  //   console.log(text);

  //   return code;
  // };

  // const TriggerModal = () => {
  //   viewModal()
  // }

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   key: "name",
    //   sorter: (a, b) => a.name.length - b.name.length,
    //   sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
    //   ...getColumnSearchProps("name"),
    //   ellipsis: true,
    // },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "18%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Code",
      dataIndex: "uniqueCode",
      key: "uniqueCode",
      width: "8%",
      sorter: (a, b) => a.uniqueCode - b.uniqueCode,
      sortOrder:
        sortedInfo.columnKey === "uniqueCode" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <div style={{ cursor: "pointer" }}>{text}</div>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "7%",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone - b.phone,
      sortOrder: sortedInfo.columnKey === "phone" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date",
      dataIndex: "appointmentDate",
      key: "appointmentDate",
      sorter: (a, b) => a.appointmentDate.seconds - b.appointmentDate.seconds,
      sortOrder:
        sortedInfo.columnKey === "appointmentDate" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <div>{formatDate(text)}</div>,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      sorter: (a, b) => a.time.seconds - b.time.seconds,
      sortOrder: sortedInfo.columnKey === "time" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => <div>{formatTime(text)}</div>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Passed",
          value: "passed",
        },
        {
          text: "Missed",
          value: "missed",
        },
        {
          text: "Rescheduled",
          value: "rescheduled",
        },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text) => (
        <div
          style={{
            background:
              text === "missed"
                ? "#EECECF"
                : text === "rescheduled"
                ? "#EEDAC1"
                : text === "pending"
                ? "skyblue"
                : "#CFD6CF",
            color:
              text === "missed"
                ? "#D1393D"
                : text === "rescheduled"
                ? "#E99F3E"
                : text === "pending"
                ? "blue"
                : "#4F7D67",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "capitalize",
            borderRadius: "15px",
          }}
        >
          {text}
        </div>
      ),
    },
    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    //   key: "actions",
    //   width: "10%",
    //   render: () => (
    //     <Button type="primary" onClick={viewModal}>
    //       Actions
    //     </Button>
    //   ),
    // },
  ];
  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
      {/* <ViewAppointment
        open={showViewModal}
        setOpen={setShowViewModal}
        code={code}
      /> */}
    </>
  );
};
export default DataTable;
