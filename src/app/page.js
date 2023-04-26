"use client"
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input, Button, Select, List, Radio } from 'antd';

const { Option } = Select;

const priorities = ['Low', 'Medium', 'High'];
// const statuses = ['All', 'Completed', 'To do'];
const statuses = [
  { label: 'All', value: 'All' },
  { label: 'Completed', value: 'Completed' },
  { label: 'Todo', value: 'To do' },
]

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('Low');
  const [searchValue, setSearchValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() === '') return;

    const newTask = {
      id: uuidv4(),
      name: inputValue.trim(),
      priority: priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
    setPriority('Low');
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  // const handleStatusFilterChange = (value) => {
  //   setStatusFilter(value);
  // };
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

  const filteredTasks = tasks.filter((task) => {
    const statusMatch =
      statusFilter === 'All' ? true : task.completed === (statusFilter === 'Completed');
    // const statusMatch = task.filter((task) => {
    //   if (statusFilter === 'All') {
    //     return true;
    //   }
    //   if (statusFilter === 'Completed') {
    //     return task.completed;
    //   }
    //   if (statusFilter === 'To do') {
    //     return !task.completed;
    //   }
    //   return false;
    // });
    const priorityMatch =
      priorityFilter === 'All' ? true : task.priority === priorityFilter.toLowerCase();
    const searchMatch = task.name.toLowerCase().includes(searchValue);
    console.log('X', priorityMatch);
    return statusMatch && priorityMatch && searchMatch;
  });

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '30px', fontStyle: 'bold' }}>TODO APP</h1>

       

      {/* Seach task  */}
      <div style={{ marginBottom: '16px' }}>
        <p>Search</p>
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
      <div style={{ marginBottom: '16px' }}>
        <h3>Filter by status:</h3>
        <Radio.Group options={statuses} value={statusFilter} onChange={handleStatusFilterChange} />
      </div>
     
      {/* Priority task */}
      <div style={{ marginBottom: '16px' }}>
        <h3>Filter by priority:</h3>      
        <Select defaultValue="All" style={  { width: '120px' }} onChange={handlePriorityFilterChange}>
          <Option key="All" value="All">
            All
          </Option>
          {priorities.map((priority) => (
            <Option key={priority} value={priority}>
              {priority}
            </Option>
            ))}
        </Select>
      </div>

      <List
        bordered
        dataSource={filteredTasks}
        renderItem={(task) => (
          <List.Item
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => handleTaskClick(task.id)}>
            {task.name}     {task.priority}
          </List.Item>
          )}
        />

        {/* create new task  */}
      <div style={{ display: 'flex', marginTop: '16px', marginBottom: '16px ' }}>
        <Input value={inputValue} onChange={handleInputChange} style={{ marginRight: '8px' }} />
        <Select defaultValue="low" style={{ width: '120px', marginRight: '8px' }} onChange={handlePriorityChange}>
          {priorities.map((priority) => (
            <Option key={priority} value={priority}>
              {priority}
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
