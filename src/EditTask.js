import React from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
const EditTask = (props) => {
    const { id, title, status, editItem, handleToggle } = props;
    const formSubmission = (task) => {
        axios
            .put(`http://localhost:3033/api/tasks/${task.id}`, task)
            .then((response) => {
                const result = response.data;
                editItem(result);
                handleToggle();
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    return (
        <div>
            <h2>Edit your task</h2>
            <TaskForm
                id={id}
                title={title}
                status={status}
                formSubmission={formSubmission}
            />
        </div>
    );
};
export default EditTask;
