import React, { useState } from "react";
import TaskForm from "./TaskForm";
import axios from "axios";
const AddTask = (props) => {
    const { addItem } = props;
    const [isSaved, setIsSaved] = useState(false);
    const formSubmission = (task) => {
        axios
            .post("http://localhost:3033/api/tasks", task)
            .then((response) => {
                // console.log(response.data);
                addItem(response.data);
                setIsSaved(true);
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    const toggleIsSaved = () => {
        setIsSaved(false);
    };
    return (
        <div>
            <h2>AddTask</h2>
            <TaskForm
                formSubmission={formSubmission}
                isSaved={isSaved}
                toggleIsSaved={toggleIsSaved}
            />
        </div>
    );
};
export default AddTask;
