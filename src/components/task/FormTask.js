import React from 'react';
import {useContext, useState,useEffect} from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

function FormTask(props) {

    //First we need import context
    const projectContext = useContext(ProjectContext);
    const {project} = projectContext;

    const taskContext = useContext(TaskContext);
    const {taskError,taskToEdit, getTasksProject ,addTaskProject,validateTask,updateTask} = taskContext;

    const [task, setTask] = useState({
        name:''
    });
    useEffect(()=>{
        if(taskToEdit !== null){
            setTask(taskToEdit);
        }else{
            setTask({
                name:''
            });
        }
    }, [taskToEdit]);

    if(!project) return null;

    const [currProject] = project;


    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = e =>{
        e.preventDefault();
        if(task.name.trim() === ''){
            validateTask();
            return;
        }
        if(taskToEdit === null) {
            task.projectId = currProject.id;
            task.state = false;
            addTaskProject(task);
        }else{
            updateTask(task);
        }
        getTasksProject(currProject.id);
        setTask({name: ''});
    };



    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="name"
                        value={task.name}
                        onChange={handleChange}/>
                </div>
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value={taskToEdit ? "Editar tarea" : "Añadir tarea"}
                />
            </form>

            {taskError ? <p className="mensaje error">La tarea debe tener una definición</p> : null}
        </div>
    );
}

export default FormTask;