import React, {Fragment, useContext} from 'react';
import Task from "./Task";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function ListTasks(props) {

    const projectsContext = useContext(ProjectContext);
    const {project, deleteProject} = projectsContext;

    const tasksContext = useContext(TaskContext);
    const {tasksProject} = tasksContext;


    if (!project) return <h2>Selecciona un proyecto</h2>;
    const [currentProject] = project;

    return (
        <Fragment>
            <h2>{currentProject.name}</h2>
            <ul className="listado-tareas">
                {tasksProject === null || tasksProject.length === 0 ?
                    (<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                        {
                            tasksProject.map(task => (
                                <CSSTransition
                                    key={task.id}
                                    timeout={200}
                                    classNames="tarea">
                                    <Task
                                        task={task}/>
                                </CSSTransition>

                            ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar" onClick={() => {
                deleteProject(currentProject.id)
            }}>
                Eliminar proyecto &times;
            </button>
        </Fragment>
    );
}

export default ListTasks;