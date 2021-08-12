import React, { useState, useEffect } from "react";
import axios from "axios";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
const TasksContainer = (props) => {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3033/api/tasks")
            .then((response) => {
                // console.log(response.data);
                setTask(response.data); //success
            })
            .catch((err) => {
                alert(err.message);
            }); //error
    }, []);
    const addItem = (task) => {
        setTask([...tasks, task]);
    };
    const removeItem = (id) => {
        const filteredTask = tasks.filter((task) => task.id !== id);
        setTask(filteredTask);
    };
    const editItem = (task) => {
        const result = tasks.map((t) => {
            if (t.id === task.id) {
                return { ...t, ...task };
            } else {
                return { ...t };
            }
        });
        setTask(result);
    };
    return (
        <div>
            <TasksList tasks={tasks} removeItem={removeItem} editItem={editItem} />
            <AddTask addItem={addItem} />
        </div>
    );
};
export default TasksContainer;
