import React from "react";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
    const { tasks, removeItem, editItem } = props;
    return (
        <div>
            {tasks.length === 0 ? (
                <div>
                    <h2>No tasks found</h2>
                    <p>Add your first tasks</p>
                </div>
            ) : (
                <div>
                    <h2>My Task - {tasks.length}</h2>
                    {tasks.map((task) => {
                        return (
                            <TaskItem
                                key={task.id}
                                {...task}
                                removeItem={removeItem}
                                editItem={editItem}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};
export default TasksList;
