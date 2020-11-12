import React, {Fragment, useContext, useEffect} from 'react';
import Task from "./Task";
import ProjectContext from "../../context/projects/projectContext";

function ListTasks(props) {

    const projectsContext = useContext(ProjectContext);
    const {project,deleteProject} = projectsContext;
    if(!project) return <h2>Selecciona un proyecto</h2>;
    const [currentProject] = project;

    const tasks = [
        {
            name: 'Elegir plataforma',
            state: true
        },
        {
            name: 'Elegir plataforma otra vez',
            state: false
        },
        {
            name: 'otra cosa',
            state: false
        },
        {
            name: 'Otra mas',
            state: true
        }
    ]
    return (
        <Fragment>
            <h2>{currentProject.name}</h2>
            <ul className="listado-tareas">
                {tasks.length === 0 ?
                    (<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    tasks.map( task =>(
                        <Task
                            task={task}/>
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar" onClick={()=>{ deleteProject(currentProject.id)}}>
                Eliminar proyecto &times;
            </button>
        </Fragment>
    );
}

export default ListTasks;