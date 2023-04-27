import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input, Button, Select, List, Radio, Tag } from "antd";

const { Option } = Select;
const priorities = ["Low", "Medium", "High"];

const priorityColors = [
  { key: "Low", color: "gray" },
  { key: "Medium", color: "blue" },
  { key: "High", color: "red" },
];

const PriorityTask = ({ onPriorityFilterChange }) =>
{
    const [priorityFilter, setPriorityFilter] = useState([]);
    const handlePriorityFilterChange = (value) => {
        setPriorityFilter(value);
        // onPriorityFilterChange(value);
    };

    return(
        <div style={{ marginBottom: "16px" }}>
            <h4>Filter by priority:</h4>
            <Select
                mode="multiple"
                allowClear
                placeholder="Please select"
                style={{ width: "100%" }}
                value={priorityFilter}
                onChange={handlePriorityFilterChange}
            >
                {priorities.map((priority) => (
                <Option key={priority} value={priority}>
                    <Tag
                        color={
                            priorityColors.find((pri) => priority === pri.key)?.color
                        }
                    >
                        {priority}
                    </Tag>
                </Option>
          ))}
            </Select>
        </div>
    );
}

export default PriorityTask;