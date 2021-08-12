import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TaskForm = (props) => {
    const {
        formSubmission,
        isSaved,
        toggleIsSaved,
        id: slNo,
        title: tasktitle,
        status: taskstatus,
    } = props;
    const [id, setId] = useState(slNo ? slNo : uuidv4());
    const [title, setTitle] = useState(tasktitle ? tasktitle : "");
    const [status, setStatus] = useState(taskstatus ? taskstatus : false);
    useEffect(() => {
        if (isSaved) {
            setId(uuidv4());
            setTitle("");
            setStatus(false);
            toggleIsSaved();
        }
    }, [toggleIsSaved, isSaved]);
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleChecked = (e) => {
        setStatus(e.target.checked);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length > 0) {
            const formData = {
                id: id,
                title: title,
                status: status,
            };
            formSubmission(formData);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <br />
                <input type="text" value={title} onChange={handleTitleChange} />
                <br />
                <input type="checkbox" checked={status} onChange={handleChecked} />
                <label>Completed</label>
                <br />
                <input type="submit" value="save" />
            </form>
        </div>
    );
};
export default TaskForm;
