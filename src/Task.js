import React from "react";

const Task = ({task}) => {
    return (
        <div>
            {task.id} : {task.event}<br/>
        </div>
    );
}

export default Task;