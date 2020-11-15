import React from 'react';
import TaskContext from "../../context/tasks/taskContext";
import {useContext} from "react";

function Task({task}) {

    const taskContext = useContext(TaskContext);
    const {deleteTask,getTasksProject, updateTaskState,selectUpdateTask} = taskContext;

    const deleteElement= task =>{
        deleteTask(task.id);
        getTasksProject(task.projectId);
    };
    const updateState = task =>{
        task.state = !task.state;
        updateTaskState(task);
    };
    const editTask = task =>{
        selectUpdateTask(task);
    };
    return (
        <li className="tarea sombra">
            <p> { task.name }</p>
            <div className="estado">
                {task.state ?
                    (
                        <button
                            type="button"
                             className="completo"
                            onClick={()=> updateState(task)}>Completo</button>
                    ):
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={()=> updateState(task)}>Incompleto</button>
                    )}
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={()=>editTask(task)}> Editar </button>
                <button
                    type="button"
                    onClick={()=>deleteElement(task)}
                    className="btn btn-secundario"> Eliminar </button>
            </div>
        </li>
    );
}

export default Task;