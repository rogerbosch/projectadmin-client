import React, {Fragment} from 'react';
import Task from "./Task";

function ListTasks(props) {
    //TODO cargar desde props

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
            <h2>Proyecto: [Añadir nombre] </h2>
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
                className="btn btn-eliminar">
                Eliminar proyecto &times;
            </button>
        </Fragment>
    );
}

export default ListTasks;