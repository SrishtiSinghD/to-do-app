import React from "react";
import Task from "./Task";


function TaskList(props){
    return (
        <div>
                {props.listTasks.map(task => {
                    return (
                        <Task task = {task}/>
                    );
                })}
        </div>
    );
};

export default TaskList;