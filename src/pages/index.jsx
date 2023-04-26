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
const statuses = [
  { label: "All", value: "All" },
  { label: "Completed", value: "Completed" },
  { label: "Todo", value: "Todo" },
];

const initTasks = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn English", completed: true, priority: "High" },
  { id: 3, name: "Learn JS", completed: false, priority: "Low" },
];

const Todo = () => {
  const [tasks, setTasks] = useState(initTasks);
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("Low");
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      name: inputValue.trim(),
      priority: priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handlePriorityFilterChange = (value) => {
    setPriorityFilter(value);
  };

  const handleTaskClick = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // const filteredTasks = tasks.filter((task) => {
  //   const statusMatch =
  //     statusFilter === "All"
  //       ? true
  //       : task.completed === (statusFilter === "Completed");
  //   // const statusMatch = task.filter((task) => {
  //   //   if (statusFilter === 'All') {
  //   //     return true;
  //   //   }
  //   //   if (statusFilter === 'Completed') {
  //   //     return task.completed;
  //   //   }
  //   //   if (statusFilter === 'To do') {
  //   //     return !task.completed;
  //   //   }
  //   //   return false;
  //   // });
  //   const priorityMatch =
  //     priorityFilter === "All"
  //       ? true
  //       : task.priority === priorityFilter.toLowerCase();
  //   const searchMatch = task.name.toLowerCase().includes(searchValue);
  //   return statusMatch && priorityMatch && searchMatch;
  // });
  const filteredTasks = tasks.filter((task) => {
    if (statusFilter === "All") {
      return priorityFilter.length
        ? task.name.includes(searchValue) &&
            priorityFilter.includes(task.priority)
        : task.name.includes(searchValue);
    }

    return (
      task.name.includes(searchValue) &&
      (statusFilter === "Completed" ? task.completed : !task.completed) &&
      (priorityFilter.length ? priorityFilter.includes(task.priority) : true)
    );
  });

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "30px",
          fontStyle: "bold",
        }}
      >
        TODO APP
      </h1>

      {/* Seach task  */}
      <div style={{ marginBottom: "16px" }}>
        <h4>Search:</h4>
        <Input.Search
          placeholder="Search tasks"
          value={searchValue}
          onChange={handleSearchChange}
          enterButton
        />
      </div>

      {/* Status task */}
      {/* <div style={{ marginBottom: '16px' }}>
        <h3>Filter by status:</h3>
        <Radio.Group options={statuses} value={statusFilter} onChange={handleStatusFilterChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="To do">Todo</Radio>
        </Radio.Group>
      </div> */}
      <div style={{ marginBottom: "16px" }}>
        <h4>Filter by status:</h4>
        <Radio.Group
          options={statuses}
          value={statusFilter}
          onChange={handleStatusFilterChange}
        />
      </div>

      {/* Priority task */}
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

      <List
        bordered
        dataSource={filteredTasks}
        renderItem={(task) => (
          <List.Item
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            onClick={() => handleTaskClick(task.id)}
          >
            {task.name} <Tag
                color={
                  priorityColors.find((pri) => task.priority === pri.key)?.color
                }
              >
                {task.priority}
              </Tag>
          </List.Item>
        )}
      />

      {/* create new task  */}
      <div
        style={{ display: "flex", marginTop: "16px", marginBottom: "16px " }}
      >
        <Input
          placeholder="Enter task"
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginRight: "8px" }}
        />
        <Select
          defaultValue="Low"
          style={{ width: "180px", marginRight: "8px" }}
          onChange={handlePriorityChange}
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

        <Button type="primary" onClick={handleAddTask}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default Todo;
