import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input, Button, Select, List, Radio, Tag } from "antd";

const { Option } = Select;
const statuses = [
  { label: "All", value: "All" },
  { label: "Completed", value: "Completed" },
  { label: "Todo", value: "Todo" },
];  

const StatusTask = ({onStatusFilterChange}) =>
{
    const [statusFilter, setStatusFilter] = useState("All");

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
        // onStatusFilterChange(e.target.value);
    };
    return (
        <div style={{ marginBottom: "16px" }}>
        <h4>Filter by status:</h4>
        <Radio.Group
          options={statuses}
          value={statusFilter}
          onChange={handleStatusFilterChange}
        />
      </div>
    );
}

export default StatusTask;