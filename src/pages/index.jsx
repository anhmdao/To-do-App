import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input, Button, Select, List, Radio, Tag } from "antd";
import SearchTask from "../component/SearchTask";
import StatusTask from "../component/StatusTask";
import PriorityTask from "../component/PriorityTask";

const { Option } = Select;
const priorities = ["Low", "Medium", "High"];
const priorityColors = [
  { key: "Low", color: "gray" },
  { key: "Medium", color: "blue" },
  { key: "High", color: "red" },
];
const initTasks = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn English", completed: true, priority: "High" },
  { id: 3, name: "Learn JS", completed: false, priority: "Low" },
];

const Todo = ({onPriorityFilterChange, onSearchChange, onStatusFilterChange}) => {
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

  const handleTaskClick = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

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

      <SearchTask onChangeImage={() => {
          onSearchChange(e.target.value.toLowerCase());
        }}/>
      <StatusTask onStatusFilterChange={() =>{
         onStatusFilterChange(e.target.value);
      }}/>
      <PriorityTask onPriorityFilterChange={() =>{
        onPriorityFilterChange(value);
      }}/>

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